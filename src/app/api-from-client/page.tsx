'use client'

import { useEffect, useState } from 'react'

export default function APITestPage () {
  const [name, setName] = useState<string>()

  useEffect(() => {
    fetch('/api/who-am-i')
      .then(async res => await res.json())
      .then(data => {
        setName(data.name)
        console.log(data)
      })
      .catch(err => { console.error(err) })
  }, [])

  return (
    <main>
      <h2 className='text-2xl'>API roun from Client</h2>
      <p>Name: {name}</p>
    </main>
  )
}
