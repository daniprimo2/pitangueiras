import React from 'react'
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import SobreNos from '../components/SobreNos/SobreNos'

function Rotas() {
  return (<>
    <Router>
        <Routes>
            <Route path='/' element={<Layout />}/>
            <Route path='/sobrenos' element={<SobreNos />}/>

        </Routes>
    </Router>
  </>
  )
}

export default Rotas