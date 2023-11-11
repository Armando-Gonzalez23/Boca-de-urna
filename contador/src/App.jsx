import { useState } from 'react'
import './App.css'
//import Candidato from 'Candidato'



function App(prop) {
  const [cuenta, setCuenta] = useState(0)
  return (
    <>
    <div className="centrar">
    <h1>{prop.title}</h1>
    <div className="contenedor">
    <h3>{prop.titulo}</h3>
        <h2>{cuenta}</h2>
        <div className="boton">
            <button onClick={function click1() { setCuenta(cuenta + 1) } }>+</button> 
            <button onClick={ function click2() {if (cuenta>0) {setCuenta(cuenta - 1) }} }>-</button>
            </div>
            </div>
            </div>
      </>
  )
 
}

export default App
 
