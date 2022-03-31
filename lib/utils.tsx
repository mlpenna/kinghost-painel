export function bytesToMegabytes(b: number) {

    return (b / Math.pow(1024, 2)).toFixed(2);
}

export function computeOccupiedSpace(emailList: any) {

    let totalOccupied = 0;

    if (emailList === undefined) { return 0; }
    emailList.map((item: any) => {
        totalOccupied += parseInt(item.quota);
    })
    return bytesToMegabytes(totalOccupied);
}

export function adjustMailboxSizeAdd(mailBox: string, domain: number, newQuota: number, setSelectedDomainID: any) {

    setSelectedDomainID("");

    const postData = {
        idDominio: domain,
        caixa: mailBox,
        tamanho: newQuota,
    };
    let bodyData = JSON.stringify(postData);

    const putMethod = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
        body: bodyData,
    }

    fetch('/api/email/adjust/', putMethod)
        .then((res) => res.json())
        .then(() => {
            setSelectedDomainID(domain);
        })



}

export function adjustMailboxSizeSub(mailBox: string, domain: number, newQuota: number, setSelectedDomainID: any) {
    
    setSelectedDomainID("");

    const postData = {
        idDominio: domain,
        caixa: mailBox,
        tamanho: newQuota,
    };
    let bodyData = JSON.stringify(postData);

    const putMethod = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
        body: bodyData,
    }

    fetch('/api/email/adjust/', putMethod)
        .then((res) => res.json())
        .then(() => {
            setSelectedDomainID(domain);
        })
}


// export default { bytesToMegabytes, computeOccupiedSpace };