import { adjustMailboxSizeAdd, adjustMailboxSizeSub, bytesToMegabytes } from "../lib/utils";
import { useState } from 'react';
import { useAlert } from 'react-alert'


function EmailTableEntry({ emailInfo, selectedDomainID, setSelectedDomainID }: any) {

    const alert = useAlert()

    const [currentQuota, setCurrentQuota] = useState(bytesToMegabytes(emailInfo.quota))

    function handleOnClickAdd() {
        const newQuota = parseInt(currentQuota) + 100;
        adjustMailboxSizeAdd(emailInfo.email, parseInt(selectedDomainID), newQuota, setSelectedDomainID, alert);
        setCurrentQuota(newQuota.toString());
    }

    function handleOnClickSub() {
        let adjustReturn: string = ""
        const newQuota = parseInt(currentQuota) - 100;
        adjustMailboxSizeSub(emailInfo.email, parseInt(selectedDomainID), newQuota, setSelectedDomainID, alert);
        setCurrentQuota(newQuota.toString());
    }


    if (emailInfo.tipo === "Caixa Postal") {
        const occupiedSpace: string = bytesToMegabytes(emailInfo.ocupado);
        const occupiedPercentage: string = (100 * parseInt(occupiedSpace) / parseInt(currentQuota)).toFixed(2);

        return (
            <tr>
                <td>{emailInfo.ativo}</td>
                <td>{emailInfo.email}</td>
                <td>{currentQuota + " MB"}</td>
                <td>{occupiedSpace + " MB"}</td>
                <td><div className="tooltip tooltip-left" data-tip={occupiedPercentage + " %"}><progress className="progress progress-warning h-3 w-20" value={occupiedPercentage} max="100"></progress></div></td>
                <td><label onClick={handleOnClickAdd} className="btn modal-button btn-xs">+100 MB</label></td>
                <td><label onClick={handleOnClickSub} className="btn btn-xs">-100 MB</label></td>
            </tr >
        );
    }

    return (
        null
    )
}

export default EmailTableEntry;