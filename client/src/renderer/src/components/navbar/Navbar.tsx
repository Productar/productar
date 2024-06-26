import { useState, ReactNode, createContext, useContext } from 'react'
import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'

// Define types for props
interface SidebarProps {
  children: ReactNode
}

// Define type for Sidebar context
interface SidebarContextType {
  expanded: boolean
}

// Create Sidebar context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

// Sidebar component
export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState<boolean>(true)

  return (
    <aside className="flex min-h-[100vh]">
      <nav className="h-full  flex flex-col border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${expanded ? 'w-20' : 'w-0'}`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <div className="flex-1 px-3">{children}</div>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-30 ml-3' : 'w-0'}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <Dropdown>
              <DropdownTrigger>
                <MoreVertical size={20} />
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Settings</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </nav>
    </aside>
  )
}

// SidebarItem component props
interface SidebarItemProps {
  icon: ReactNode
  text: string
  path: string
  alert?: boolean
}

// SidebarItem component
export function SidebarItem({ path, icon, text, alert }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext)! // Use ! to assert non-null since we know it's provided by Sidebar

  return (
    <>
      {
        path ? <NavLink to={path}
          className={({ isActive }) => `
    relative flex items-center py-2 px-3
    font-medium cursor-pointer
    transition-colors group
    ${isActive ? 'text-c-primary bg-c-primary-hover' : 'hover:bg-c-primary-hover2 text-gray-600'}
    ${expanded ? '' : 'rounded-md'}
    `}
        >
          {icon}
          <span className={`overflow-hidden transition-all ${expanded ? 'w-30 ml-3' : 'w-0'}`}>
            {text}
          </span>
          {alert && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`}
            />
          )}

          {!expanded && (
            <div
              className={`
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-indigo-100 text-c-primary text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
            >
              {text}
            </div>
          )}
        </NavLink>
          : <div
            className={`
    relative flex items-center py-2 px-3 font-medium cursor-pointer transition-colors group   
    text-[#ffd700] hover:bg-[#ffd9002d]
    ${expanded ? '' : 'rounded-md'}
    `}
          >
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? 'w-30 ml-3' : 'w-0'}`}>
              {text}
            </span>
            {alert && (
              <div
                className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`}
              />
            )}

            {!expanded && (
              <div
                className={`
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-indigo-100 text-indigo-800 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
              >
                {text}
              </div>
            )}
          </div>
      }

    </>
  )
}
