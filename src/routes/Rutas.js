import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from '../layout/Layout';
//import de componentes
import Home from '../pages/Home';
import Lista from '../components/Lista';
import DatosPersonales from '../components/DatosPersonales';


export default function Rutas() {
  return (
    <Layout>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/lista' exact element={<Lista/>}/>
        <Route path='/datos' exact element={<DatosPersonales/>}/>
    </Routes>
    </Layout>
  )
}
