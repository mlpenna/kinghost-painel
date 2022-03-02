
function SelectDomain(props: any) {

    if (props.domainList.status != "ok") { return <div>Erro ao carregar lista de dominios</div> }

    return (
        <select className="select w-full max-w-xs">
            <option disabled>Selecione o domínio</option>
            {
                props.domainList.body.map((item, i) => {
                    return (
                        <option key={i}>{item.dominio + " | " + item.id}</option>
                    )
                })
            }
        </select>
    );
}

export default SelectDomain;