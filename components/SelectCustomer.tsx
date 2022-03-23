function SelectCliente(props: any) {

    function setCustomerState(e: any) {
        props.setCustomerName(e.target.value);
        props.setCustomerID(e.target.selectedOptions[0].getAttribute('data-key'));
    }

    if (props.customerList.status != "ok") { return <div>Erro ao carregar lista de clientes</div> }

    return (
        <>
            <label className="label">
                <span className="label-text font-light">Selecione o cliente:</span>
            </label>
            <select onChange={setCustomerState} className="select select-bordered select-sm w-full max-w-xs">
                <option disabled selected>Selecione o cliente desejado</option>
                {
                    Object.keys(props.customerList.body).map((key) => {
                        return (
                            <option data-key={props.customerList.body[key].idCliente} key={props.customerList.body[key].idCliente}>{props.customerList.body[key].clienteNome}</option>
                        )
                    })
                }
            </select>
        </>
    );
}

export default SelectCliente;