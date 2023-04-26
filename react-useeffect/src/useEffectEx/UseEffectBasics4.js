import React, { useEffect, useState } from 'react'

const UseEffectBasics4 = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },3000)
  },[])
  if(isLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <h2>UseEffect Mulitple Returns</h2>
    </div>
  )
}

export default UseEffectBasics4
