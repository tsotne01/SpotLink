import React from 'react'
import locationIcon from "./location-icon.png"

function Header() {
  return (
    <div className='w-full h-20 bg-white border-b border-b-solid border-slate-800 flex justify-between px-10'>
        <div className="logo ">
            <img className='w-[50px] h-[50px]' src={locationIcon} alt="Logo" />
        </div>
    </div>
  )
}

export default Header