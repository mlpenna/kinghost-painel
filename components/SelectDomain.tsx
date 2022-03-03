
function SelectDomain(props: any) {

    if (props.domainList.status != "ok") { return <div></div> }

    return (
        <>
            <label className="label">
                <span className="label-text font-light">Selecione o domínio:</span>
            </label>
            <select className="select select-bordered select-sm w-full max-w-xs">
                {
                    props.domainList.body.map((item, i) => {
                        return (
                            <option key={i}>{item.dominio + " | " + item.id}</option>
                        )
                    })
                }
            </select>
        </>
    );
}

export default SelectDomain;