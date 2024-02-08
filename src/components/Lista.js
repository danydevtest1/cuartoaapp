import React, {useState} from 'react';
import Datos from './Datos';

export default function Lista() {
    const [datos, setDatos]=useState([
        {
            "id":"01",
            "nombre":"Dany Cambrano Arcos",
            "tel":"9341052345",
            "direccion":"Balancan",
            "imag":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cuesta_del_obispo_01.jpg/800px-Cuesta_del_obispo_01.jpg"
        },
        {
            "id":"02",
            "nombre":"Francisco Lopez",
            "tel":"9341052345",
            "direccion":"Zapata",
            "imag":"https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
        },
        {
            "id":"03",
            "nombre":"Jose Antonio",
            "tel":"9341052345",
            "direccion":"Tenosique",
            "imag":"https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg"
        }
    ])
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
