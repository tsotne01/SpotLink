import React from 'react'

function Input({ label, placeholder, id, type, ...props }) {
    return (
        <div className='flex flex-col gap-y-1.5'>
            <label className="block text-slate-500" htmlFor={id}>
                {label}
            </label>
            <input
                {...props}
                className="block border border-slate-600 p-2 rounded-sm w-full"
                type={type}
                id={id}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input