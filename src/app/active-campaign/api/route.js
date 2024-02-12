export async function GET() {
  const res = await fetch(
    "https://spiking8888.api-us1.com/api/3/contacts/23604",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "Api-Token":
          "04a9e33a3d6bce402f9f6b5e7a5c76a8deedf66d9e198239cc3e827436db55d003ffdde1",
      },
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = await res.json()

  return Response.json({ data })
}
