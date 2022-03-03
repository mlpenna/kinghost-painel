import Navbar from "../components/Navbar";
import DigestFetch from "digest-fetch"
import { useState, useEffect } from 'react';
import InfoDominio from "../components/InfoDominio";

function Home(props: any) {
  const [clienteNome, setClienteNome] = useState("Cliente");
  const [clienteID, setClienteID] = useState("ID");
  const [domainList, setDomainList] = useState({});

  useEffect(() => { 
    fetch('/api/domains/' + clienteID)
      .then((res) => res.json())
      .then((data) => {
        setDomainList(data);
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
        />
        <InfoDominio />
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