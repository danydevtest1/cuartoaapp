import React, {useState} from 'react';
import Datos from './Datos';
import {lista} from "../datos/ListDatos";

export default function Lista() {
   
    const [datos, setDatos]=useState(lista)
  return (
    <div>
        {
            datos.map(
                (persona)=>
                <Datos
                key={persona.id}
                 nombre={persona.nombre} 
                telefono={persona.tel} 
                direccion={persona.direccion}
                imagenes={persona.imag}
                />)
        }
        
    </div>
  )
}
