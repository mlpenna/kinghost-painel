import { bytesToMegabytes } from "../lib/utils";

function EmailTableEntry({ emailInfo }: any) {


    if (emailInfo.tipo === "Caixa Postal") {
        const espacoOcupado: string = bytesToMegabytes(emailInfo.ocupado);
        const espacoQuota: string = bytesToMegabytes(emailInfo.quota);
        const porcentagemOcupado: string = (100 * parseInt(espacoOcupado) / parseInt(espacoQuota)).toFixed(2);

        return (
            <tr>
                <td>{emailInfo.ativo}</td>
                <td>{emailInfo.email}</td>
                <td>{espacoQuota + " MB"}</td>
                <td>{espacoOcupado + " MB"}</td>
                <div className="tooltip tooltip-left" data-tip={porcentagemOcupado + " %"}><td><progress className="progress progress-warning h-3 w-20" value={porcentagemOcupado} max="100"></progress></td></div>
                <td><button className="btn btn-xs">+100 MB</button></td>
                <td><button className="btn btn-xs">-100 MB</button></td>
            </tr>
        );
    }

    return (
        <div></div>
    )
}

export default EmailTableEntry;