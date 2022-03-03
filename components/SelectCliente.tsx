function SelectCliente(props: any) {

    function setClienteState(e: any) {
        props.setClienteNome(e.target.value);
        props.setClienteID(e.target.selectedOptions[0].getAttribute('data-key'));
    }

    if (props.clienteList.status != "ok") { return <div>Erro ao carregar lista de clientes</div> }

    return (
        <>
            <label className="label">
                <span className="label-text font-light">Selecione o cliente:</span>
            </label>
            <select onChange={setClienteState} className="select select-bordered select-sm w-full max-w-xs">
                {
                    Object.keys(props.clienteList.body).map((key) => {
                        return (
                            <option data-key={props.clienteList.body[key].idCliente} key={props.clienteList.body[key].idCliente}>{props.clienteList.body[key].clienteNome}</option>
                        )
                    })
                }
            </select>
        </>
    );
}

export default SelectCliente;