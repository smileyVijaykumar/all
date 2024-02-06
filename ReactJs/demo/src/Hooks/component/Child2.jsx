import React, { useContext } from 'react'
import { GlobalApiProvider } from '../useeffect/GlobalContext'

const Child2 = () => {
  const data=useContext(GlobalApiProvider)
  console.log(data)
  return (
    <div>
      Child2
      <h1>{data}</h1>
    </div>
  )
}

export default Child2
