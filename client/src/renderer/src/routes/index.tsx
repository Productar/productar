import Home from '@renderer/pages/Home'

import Login from '@renderer/pages/Auth/Login'
import Informes from '@renderer/pages/Informes'
import Register from '@renderer/pages/Auth/Register'
import Companies from '@renderer/pages/Companies'

import './middlewares/unidadeseccion.scss'

import { SalesTable } from '@renderer/pages/SalesTable'
import { StockTable } from '@renderer/pages/StockTable'
import { SupplierTable } from '@renderer/pages/SupplierTable'
import { Route, Routes } from 'react-router-dom'
import SidebarMiddleware from './middlewares/SidebarMiddleware'
import ProtectedRouteAuth from './middlewares/ProtectedRouteSession'
import ProtectedRouteSession from './middlewares/ProtectedRouteSession'

const Router = () => {
  return (
    <Routes>
      <Route element={<SidebarMiddleware />} />
      <Route element={<ProtectedRouteSession />}>
        <Route element={<SidebarMiddleware />}>
          <Route
            path='/'
            element={
              <div className='unidadeseccion'>
                <Companies />
              </div>
            }
          />
          <Route path='/general' element={<Home />} />
          <Route path='/stock' element={<StockTable />} />
          <Route path='/ventas' element={<SalesTable />} />
          <Route path='/informes' element={<Informes />} />
          <Route path='/proveedores' element={<SupplierTable />} />
        </Route>
      </Route>
      <Route element={<ProtectedRouteAuth />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
  )
}

export default Router
