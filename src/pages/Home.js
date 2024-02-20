import React, { useState } from 'react'

export default function Home() {

  const [aumentar, setAumentar] = useState(0);

  const AumentarValor=()=>{
    setAumentar(aumentar+1);
  }
  const DecrementarValor=()=>{
    setAumentar(aumentar-1);
  }
  
  return (
    <div>
      <h1>El valor es: {aumentar}</h1>
      <button className='btn btn-primary' onClick={AumentarValor}>Incrementar</button>
      <button className='btn btn-primary' onClick={DecrementarValor}>Decrementar</button>
    </div>
  )
}
