import Navbar from "../components/Navbar";
import DigestFetch from "digest-fetch"
import { useState, useEffect } from 'react';
import InfoDominio from "../components/DomainInfo";
import EmailTable from "../components/EmailTable";
import { ClipLoader } from "react-spinners";

function Home({ customerList }: any) {
  const [customerName, setCustomerName] = useState("Cliente");
  const [customerID, setCustomerID] = useState("");
  const [customerDomainList, setCustomerDomainList] = useState({});
  const [selectedDomainID, setSelectedDomainID] = useState("");
  const [selectedDomainInfo, setSelectedDomainInfo] = useState({});
  const [domainEmailList, setDomainEmailList] = useState({});
  const [loading, setLoading] = useState(false);
  const [changedSize, setChangedSize] =  useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('/api/domain/' + customerID)
      .then((res) => res.json())
      .then((data) => {
        if (Object.keys(data).length != 0 && data.body[0].status != 'fail') {
          setCustomerDomainList(data);
          setSelectedDomainID(data.body[0].id)
        }
      })
  }, [customerID]);

  useEffect(() => {
    setLoading(true);
    fetch('/api/domain/info/' + selectedDomainID)
      .then((res) => res.json())
      .then((data) => {
        setSelectedDomainInfo(data)
      })
    fetch('/api/domain/email/' + selectedDomainID)
      .then((res) => res.json())
      .then((data) => {
        setDomainEmailList(data)
        setLoading(false);
      })
  }, [selectedDomainID])


  return (
    <>
      <Navbar
        customerDomainList={customerDomainList}
        customerList={customerList}
        customerName={customerName}
        setCustomerName={setCustomerName}
        customerID={customerID}
        setCustomerID={setCustomerID}
        setSelectedDomainID={setSelectedDomainID}
      />
      <div className='container mx-auto'>
        {loading
          ?
          <>
            <div className="flex flex-col justify-center items-center">
              <div className="normal-case mb-5 font-bold text-xl font-sans text-slate-600">Carregando Informações de Domínio...</div>
              <ClipLoader color="#0f0f02b" loading={loading} size={70} />
            </div>
          </>
          :
          <>
            <InfoDominio
              selectedDomainID={selectedDomainID}
              selectedDomainInfo={selectedDomainInfo}
            />
            <EmailTable
              domainEmailList={domainEmailList}
              domainEmailQuota={selectedDomainInfo?.body?.discoEmails}
              selectedDomainID={selectedDomainID}
              setSelectedDomainID={setSelectedDomainID}
            />
          </>
        }
      </div>
    </>
  );
}

export async function getServerSideProps() {

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

  const fetchClient = new DigestFetch(process.env.API_USER, process.env.API_PASSWORD);
  const res = await fetchClient.fetch(process.env.API_BASE_CLIENTES, {});
  const customerList = await res.json();

  return { props: { customerList } }
}


export default Home;