import Navbar from "../components/Navbar";
import DigestFetch from "digest-fetch"
import { useState, useEffect } from 'react';
import InfoDominio from "../components/DomainInfo";
import EmailTable from "../components/EmailTable";
"digest-fetch"

function Home({ customerList }: any) {
  const [customerName, setCustomerName] = useState("Cliente");
  const [customerID, setCustomerID] = useState("");
  const [customerDomainList, setCustomerDomainList] = useState({});
  const [selectedDomainID, setSelectedDomainID] = useState("");
  const [selectedDomainInfo, setSelectedDomainInfo] = useState({});
  const [domainEmailList, setDomainEmailList] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/domain/' + customerID)
      .then((res) => res.json())
      .then((data) => {
        setCustomerDomainList(data);
        if (Object.keys(data).length != 0 && data.body[0].status != 'fail') {
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
      })
  }, [selectedDomainID])

  return (
    <>
      <div className='container mx-auto'>
        <Navbar
          customerDomainList={customerDomainList}
          customerList={customerList}
          customerName={customerName}
          setCustomerName={setCustomerName}
          customerID={customerID}
          setCustomerID={setCustomerID}
          setSelectedDomainID={setSelectedDomainID}
        />
        <InfoDominio
          selectedDomainID={selectedDomainID}
          selectedDomainInfo={selectedDomainInfo}
        />
        <EmailTable
          domainEmailList={domainEmailList}
          domainEmailQuota={selectedDomainInfo?.body?.discoEmails}
        />
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