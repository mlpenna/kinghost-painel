import DigestFetch from "digest-fetch"

export default function handler(req: any, res: any) {
  const { id } = req.query;
  const client = new DigestFetch(process.env.API_USER, process.env.API_PASSWORD);
  
  const baseURL = process.env.API_BASE_DOMAIN_EMAILS + id + "/.json"

  client.fetch(baseURL, {})
  .then((res: any) => res.json())
  .then((data: any) => {
    res.status(200).json(data)
  })
}