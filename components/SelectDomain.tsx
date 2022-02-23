import useSWR from "swr";


const fetcher = url => fetch(url, {}).then(r => r.json())

function SelectDomain() {

    const { x, error} = useSWR(https://api.uni5.net/dominio/:id/.json)
    const domainList = { "status": "ok", "body": [{ "id": "726345", "dominio": "flatline.com.br" }, { "id": "726347", "dominio": "lifedesign.com.br" }, { "id": "729716", "dominio": "pcptelecom.com.br" }] }

    if (domainList.status != "ok") { return <div>Erro ao carregar lista de dominios</div> }

    return (
        <select className="select w-full max-w-xs">
            <option disabled selected>Selecione o domínio</option>
            {
                domainList.body.map((item, i) => {
                    return (
                        <option>{item.dominio + " | " + item.id}</option>
                    )
                })
            }
        </select>
    );
}
export default SelectDomain;