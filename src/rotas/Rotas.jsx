import React from 'react'
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import SobreNos from '../components/SobreNos/SobreNos'
import GlossLabial from '../components/Formularios/GlossLabial/GlossLabial'
import EsfolianteLabialPersonalizado from '../components/Formularios/EsfolianteLabialPersonalizado/EsfolianteLabialPersonalizado'
import KitPersonalizado from '../components/Formularios/KitPersonalizado/KitPersonalizado'
import LapizDeBocaPersonalizado from '../components/Formularios/LapizDeBocaPersonalizado/LapizDeBocaPersonalizado'
import LipBalmPersonalizado from '../components/Formularios/LipBalmPersonalizado/LipBalmPersonalizado'
import LipTintPersonalizado from '../components/Formularios/LipTintPersonalizado/LipTintPersonalizado'

function Rotas() {
  return (<>
    <Router>
        <Routes>
            <Route path='/' element={<Layout />}/>
            <Route path='/sobrenos' element={<SobreNos />}/>
            <Route path='/glossLabial' element={<GlossLabial />}/>
            <Route path='/esfolianteLabial' element={<EsfolianteLabialPersonalizado />}/>
            <Route path='/kitPersonalizado' element={<KitPersonalizado />}/>
            <Route path='/lapizDeBoca' element={<LapizDeBocaPersonalizado />}/>
            <Route path='/lipBalm' element={<LipBalmPersonalizado />}/>
            <Route path='/lipTint' element={<LipTintPersonalizado />}/>
        </Routes>
    </Router>
  </>
  )
}

export default Rotas