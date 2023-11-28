import { headers } from 'next/headers'

async function APIFromServer () {
  const res = await fetch('http://localhost:3000/api/who-am-i', {
    method: 'GET',
    headers: headers()
  }).then(async res => await res.json())

  return (
    <main>
      <h2 className='text-2xl'>API roun from Client</h2>
      <p>Name: {res.name}</p>
    </main>
  )
}

export default APIFromServer
