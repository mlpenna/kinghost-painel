
function SelectDomain(props: any) {

    function setDomainState(e: any) {
        props.setSelectedDomainID(e.target.selectedOptions[0].getAttribute('data-key'));
        // console.log(e.target.selectedOptions[0].getAttribute('data-key'))
    }

    if (props.domainList.status != "ok") { return <div>Selecione um cliente.</div> }

    return (
        <>
            <label className="label">
                <span className="label-text font-light">Selecione o domínio:</span>
            </label>
            <select onChange={setDomainState} className="select select-bordered select-sm w-full max-w-xs">
                {
                    props.domainList.body.map((item, i) => {
                        return (
                            <option data-key={item.id} key={i}>{item.dominio + " | " + item.id}</option>
                        )
                    })
                }
            </select>
        </>
    );
}

export default SelectDomain;