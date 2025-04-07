import React from 'react'
import locationIcon from "./location-icon.png"
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center px-4 sm:px-6 lg:px-8 shadow-sm'>

      {/* Left Side: Logo + Site Name (optional) */}
      <div className="flex items-center space-x-3">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img className='w-9 h-9' src={locationIcon} alt="Site Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden sm:inline">SpotLink</span>
        </a>
      </div>
      <nav className="text-base font-medium text-gray-600 dark:text-gray-300 hidden md:block">
        <ul className="flex space-x-2 md:space-x-4">
          <li>
            <NavLink
              to="/Dashboard/Map"
              className={({ isActive }) =>
                `block py-2 px-3 rounded-lg transition-colors duration-150 ease-in-out ${isActive
                  ? 'bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-white font-semibold'
                  : 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white'
                }`
              }
            >
              Map
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Dashboard/Events"
              className={({ isActive }) =>
                `block py-2 px-3 rounded-lg transition-colors duration-150 ease-in-out ${isActive
                  ? 'bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-white font-semibold'
                  : 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white'
                }`
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Dashboard/Clubs"
              className={({ isActive }) =>
                `block py-2 px-3 rounded-lg transition-colors duration-150 ease-in-out ${isActive
                  ? 'bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-white font-semibold'
                  : 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white'
                }`
              }
            >
              Clubs
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-3">
        <button type="button" className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341A6.002 6.002 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>

        <button type="button" className="flex text-sm bg-gray-200 dark:bg-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-700 focus:ring-blue-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src="https://placehold.co/100x100/E0E0E0/757575?text=U" alt="User avatar" />
        </button>

        <button type="button" className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

    </div>
  )
}

export default Header