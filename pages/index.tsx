import Navbar from "../components/Navbar";
import * as DigestFetch from "digest-fetch"
import fetch from '../node_modules/node-fetch/@types/index.d';
import { useState } from 'react';



function Home(props: any) {
  // console.log(props.domainList);
  const [clienteNome, setClienteNome] = useState("Cliente");
  const [clienteID, setClienteID] = useState("ID");

  return (
    <>
      <div className='container mx-auto'>
        <Navbar
          domainList={props.domainList}
          clienteList={props.clienteList}
          clienteNome={clienteNome}
          setClienteNome={setClienteNome}
          clienteID={clienteID}
          setClienteID={setClienteID}
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {

  // Fetch data from external API

  const user = 'projetos@pcptelecom.com.br';
  const password = '1357Uteste'
  const baseDominios = 'https://api.uni5.net/dominio/240330/.json'
  const baseClientes = 'https://api.uni5.net/cliente.json'
  const client = new DigestFetch(user, password);
  const options = {}

  const res1 = await client.fetch(baseClientes, options);
  const clienteList = await res1.json();

  const res2 = await client.fetch(baseDominios, options);
  const domainList = await res2.json();

  return { props: { domainList, clienteList } }
}


export default Home;