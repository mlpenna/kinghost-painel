function SelectCliente(props: any) {

    function setClienteState(e: any) {
        props.setClienteNome(e.target.value);
        props.setClienteID(e.target.selectedOptions[0].getAttribute('data-key'));
    }

    if (props.clienteList.status != "ok") { return <div>Erro ao carregar lista de clientes</div> }

    return (
        <select onChange={setClienteState} className="select w-full max-w-xs">
            <option disabled>Selecione o cliente</option>
            {
                Object.keys(props.clienteList.body).map((key) => {
                    return (
                        <option data-key={props.clienteList.body[key].idCliente} key={props.clienteList.body[key].idCliente}>{props.clienteList.body[key].clienteNome}</option>
                    )
                })
            }
        </select>
    );
}

export default SelectCliente;