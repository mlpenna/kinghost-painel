import Navbar from "../components/Navbar";
import * as DigestFetch from "digest-fetch"
import fetch from '../node_modules/node-fetch/@types/index.d';



function Home(props: any) {
  // console.log(props.domainList);

  return (
    <>
      <div className='container mx-auto'>
        <Navbar domainList={props.domainList} />
      </div>
    </>
  );
}

export async function getServerSideProps() {

  // Fetch data from external API

  const user = 'projetos@pcptelecom.com.br';
  const password = '1357Uteste'
  const base = 'https://api.uni5.net/dominio/239696/.json'
  const client = new DigestFetch(user, password);
  const options = {}

  const res = await client.fetch(base, options);
  const domainList = await res.json();

  return { props: { domainList } }
}


export default Home;