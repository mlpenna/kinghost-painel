import { adjustMailboxSizeAdd, adjustMailboxSizeSub, bytesToMegabytes } from "../lib/utils";
import { useState } from 'react';

function EmailTableEntry({ emailInfo, selectedDomainID, setSelectedDomainID }: any) {

    const [currentQuota, setCurrentQuota] = useState(bytesToMegabytes(emailInfo.quota))


    function handleOnClickAdd() {
        const newQuota = parseInt(currentQuota) + 100;
        adjustMailboxSizeAdd(emailInfo.email, parseInt(selectedDomainID), newQuota, setSelectedDomainID);
        setCurrentQuota(newQuota.toString());
    }

    function handleOnClickSub() {
        const newQuota = parseInt(currentQuota) - 100;
        adjustMailboxSizeSub(emailInfo.email, parseInt(selectedDomainID), newQuota, setSelectedDomainID);
        setCurrentQuota(newQuota.toString());
    }


    if (emailInfo.tipo === "Caixa Postal") {
        const espacoOcupado: string = bytesToMegabytes(emailInfo.ocupado);
        const porcentagemOcupado: string = (100 * parseInt(espacoOcupado) / parseInt(currentQuota)).toFixed(2);
    
        return (
            <tr>
                <td>{emailInfo.ativo}</td>
                <td>{emailInfo.email}</td>
                <td>{currentQuota + " MB"}</td>
                <td>{espacoOcupado + " MB"}</td>
                <div className="tooltip tooltip-left" data-tip={porcentagemOcupado + " %"}><td><progress className="progress progress-warning h-3 w-20" value={porcentagemOcupado} max="100"></progress></td></div>
                <td><label onClick={handleOnClickAdd} className="btn modal-button btn-xs">+100 MB</label></td>
                <td><label onClick={handleOnClickSub} className="btn btn-xs">-100 MB</label></td>
            </tr>
        );
    }

    return (
        null
    )
}

export default EmailTableEntry;