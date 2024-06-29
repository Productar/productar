import Home from '@renderer/pages/Home'
import Ventas from '@renderer/pages/Ventas'
import Pedidos from '@renderer/pages/Pedidos'
import Stock from '@renderer/pages/Stock'
import User from '@renderer/pages/User'
import Informes from '@renderer/pages/Informes'
import Presupuestos from '@renderer/pages/Presupuestos'
import Ajustes from '@renderer/pages/Ajustes'
import Ayuda from '@renderer/pages/Ayuda'
import Facturar from '@renderer/pages/Facturar'
import { Route, Routes } from 'react-router-dom'
import ProtectedRouteSession from './middlewares/ProtectedRouteSession'
import ProtectedRouteAuth from './middlewares/ProtectedRouteAuth'
import Units from '@renderer/pages/Units'
import Login from '@renderer/pages/Auth/Login'
import Register from '@renderer/pages/Auth/Register'
import SidebarMiddleware from './middlewares/SidebarMiddleware'
import Companies from '@renderer/pages/Companies'

const Router = () => {
  return (
    <Routes>
      <Route
        path='*'
        element={
          <>
            <h1>ERROR 404</h1>
          </>
        }
      />

      <Route element={<ProtectedRouteSession />}>
        {/* <Route path='/' element={<Units />} /> */}
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
          <Route path='/ventas' element={<Ventas />} />
          <Route path='/Facturar' element={<Facturar />} />
          <Route path='/pedidos' element={<Pedidos />} />
          <Route path='/stock' element={<Stock />} />
          <Route path='/usuario' element={<User />} />
          <Route path='/informes' element={<Informes />} />
          <Route path='/presupuestos' element={<Presupuestos />} />
          <Route path='/ajustes' element={<Ajustes />} />
          <Route path='/ayuda' element={<Ayuda />} />
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
