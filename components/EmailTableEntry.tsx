import bytesToMegabytes from "../lib/utils";"../lib/utils"

function EmailTableEntry(props: any) {

    

    if (props.emailInfo.tipo === "Caixa Postal") {
        const espacoOcupado: string = bytesToMegabytes(props.emailInfo.ocupado);
        const espacoQuota: string = bytesToMegabytes(props.emailInfo.quota);
        const porcentagemOcupado: string = (100 * parseInt(espacoOcupado) / parseInt(espacoQuota)).toFixed(10);

        return (
            <tr>
                <td>{props.emailInfo.ativo}</td>
                <td>{props.emailInfo.email}</td>
                <td>{espacoQuota  + " MB"}</td>
                <td>{espacoOcupado + " MB"}</td>
                {/* <td>{porcentagemOcupado}</td> */}
                <td><progress className="progress progress-warning h-3 w-20" value={porcentagemOcupado} max="100"></progress></td>
            </tr>
        );
    }

    return (
        <div></div>
    )
}

export default EmailTableEntry;