import Navbar from "../components/Navbar";
import DigestFetch from "digest-fetch"
import { useState, useEffect } from 'react';
import InfoDominio from "../components/DomainInfo";


function Home(props: any) {
  const [customerName, setCustomerName] = useState("Cliente");
  const [customerID, setCustomerID] = useState("");
  const [customerDomainList, setCustomerDomainList] = useState({});
  const [selectedDomainID, setSelectedDomainID] = useState("")

  useEffect(() => {
    fetch('/api/domain/' + customerID)
      .then((res) => res.json())
      .then((data) => {
        setCustomerDomainList(data);
        if (Object.keys(data).length != 0 && data.body[0].status != 'fail') {
          console.log(data)
          setSelectedDomainID(data.body[0].id)
        }
      })
  }, [customerID]);



  return (
    <>
      <div className='container mx-auto'>
        <Navbar
          customerDomainList={customerDomainList}
          customerList={props.customerList}
          customerName={customerName}
          setCustomerName={setCustomerName}
          customerID={customerID}
          setCustomerID={setCustomerID}
          setSelectedDomainID={setSelectedDomainID}
        />
        <InfoDominio
          selectedDomainID={selectedDomainID}
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {


  const fetchClient = new DigestFetch(process.env.API_USER, process.env.API_PASSWORD);
  const res = await fetchClient.fetch(process.env.API_BASE_CLIENTES, {});
  const customerList = await res.json();

  return { props: { customerList } }
}


export default Home;