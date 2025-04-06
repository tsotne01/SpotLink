import React from 'react'
import Input from '../Input/Input'

function SignIn() {
    return (
        <form className="flex flex-col gap-5">
            <div className="signup flex flex-col gap-y-5">
                <div>
                    <Input label="Input Email" type="email" id="email" placeholder="Enter your email." />
                </div>
                <div>
                    <Input label="Input password" type="password" id="password" placeholder="Enter your password." />
                </div>

            </div>
            <button className="px-3 py-2 bg-slate-900 text-amber-50 rounded-sm cursor-pointer">
                Sign In
            </button>
        </form>
    )
}

export default SignIn