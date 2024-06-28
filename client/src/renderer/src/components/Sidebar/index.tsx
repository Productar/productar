import {
  BiHome,
  BiCart,
  BiLabel,
  BiStats,
  BiDetail,
  BiBadgeCheck,
  BiCalculator,
} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { ReactNode } from 'react'
import { IoGridOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";


interface SidebarItemProps {
  icon: ReactNode
  text: string
  path: string
}

const SidebarItem = ({ path, icon, text }: SidebarItemProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `text-white rounded-md relative flex items-center py-3 px-3 font-medium cursor-pointer flex-col transition-colors group ${isActive ? 'text-c-primary bg-[#eadeff]' : 'hover:bg-[#893fff] text-gray-600'} `
      }
    >
      {icon}
      <span className='text-[10px] bg-[#893fff] rounded-sm absolute p-1 top-2 left-0 opacity-0 group-hover:left-12 group-hover:opacity-100 transition-all duration-300'>{text}</span>
    </NavLink>

  )
}

export const Sidebar = () => {
  const sidebarItems = [
    {
      path: '/general',
      icon: <BiHome />,
      text: 'General',
    },
    {
      path: '/facturar',
      icon: <BiCalculator />,
      text: 'Facturar',
    },
    {
      path: '/stock',
      icon: <BiCart />,
      text: 'Stock',
    },
    {
      path: '/presupuestos',
      icon: <BiDetail />,
      text: 'Presupuestos',
    },
    {
      path: '/ventas',
      icon: <BiLabel />,
      text: 'Ventas',
    },
    {
      path: '/pedidos',
      icon: <BiBadgeCheck />,
      text: 'Pedidos',
    },
    {
      path: '/informes',
      icon: <BiStats />,
      text: 'Informes',
    },
  ]

  return (

    <nav className='flex w-[45px] fixed left-0 top-0 h-screen items-center py-4 flex-col justify-between bg-c-primary '>
      <IoGridOutline className='text-white w-5 h-5 cursor-pointer' />
      <div className='px-1 mt-[10px] flex-col justify-between items-center gap-[30px]'>
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} path={item.path} icon={item.icon} text={item.text} />
        ))}
      </div>
      <SlOptions className='text-white w-4 h-4 cursor-pointer' />
    </nav>

  )
}