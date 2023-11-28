'use client'
import { useState } from 'react'
import { whoAmI } from '../actions/who-am-i'

function WhoAmIBtn () {
  const [name, setName] = useState<string>()
  const handleClick = async () => {
    setName(await whoAmI())
  }
  return (
    <>
      <button onClick={handleClick}>
        Who Am I?
      </button>
      <p>{name}</p>
    </>
  )
}

export default WhoAmIBtn
