import DigestFetch from "digest-fetch"

export default function handler(req: any, res: any) {
    const client = new DigestFetch(process.env.API_USER, process.env.API_PASSWORD);
    const baseURL = process.env.API_BASE_EMAIL_TAMANHO + ".json"
    const bodyString = 'idDominio=' + req.body.idDominio + '&caixa=' + req.body.caixa + '&tamanho=' + req.body.tamanho;
    const putMethod = {
        body: bodyString,
        method: 'PUT',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' // Indicates the content 
        },
    }
    client.fetch(baseURL, putMethod)
        .then((res: any) => res.json())
        .then((data: any) => {
            res.status(200).json(data)
        })
}