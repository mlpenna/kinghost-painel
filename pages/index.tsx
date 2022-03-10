import Navbar from "../components/Navbar";
import DigestFetch from "digest-fetch"
import { useState, useEffect } from 'react';
import InfoDominio from "../components/InfoDominio";


function Home(props: any) {
  const [clienteNome, setClienteNome] = useState("Cliente");
  const [clienteID, setClienteID] = useState("");
  const [domainList, setDomainList] = useState({});
  const [selectedDomainID, setSelectedDomainID] = useState("")

  useEffect(() => {
    fetch('/api/domain/' + clienteID)
      .then((res) => res.json())
      .then((data) => {
        setDomainList(data);
        if (Object.keys(data).length != 0 && data.body[0].status != 'fail') {
          console.log(data)
          setSelectedDomainID(data.body[0].id)
        }
      })
  }, [clienteID]);



  return (
    <>
      <div className='container mx-auto'>
        <Navbar
          domainList={domainList}
          clienteList={props.clienteList}
          clienteNome={clienteNome}
          setClienteNome={setClienteNome}
          clienteID={clienteID}
          setClienteID={setClienteID}
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
  const clienteList = await res.json();

  return { props: { clienteList } }
}


export default Home;