import { Outlet } from 'react-router-dom'
import { Sidebar } from '@renderer/components/Sidebar'
import { capitalize } from '@renderer/components/AppTable/TableComponents/utils'
import { useLocation } from 'react-router-dom'
import './bodymain.scss'

export const SidebarMiddleware = () => {
  const location = useLocation()
  const name = location.pathname.replace('/', '')

  return (
    <>
      <div className='ml-[55px] p-[20px] bodymain ' >
        <Sidebar />
        <div className='w-full h-full flex flex-col gap-4'>
          <h5 className='text-4xl font-semibold text-[var(--c-primary)]'>{capitalize(name)}</h5>
          <Outlet />
        </div>
      </div>
    </>
  )
}
