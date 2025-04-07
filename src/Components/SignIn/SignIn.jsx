import React from 'react'
import Input from '../Input/Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { singinSchema } from '../../Schemas/Schemas';
import { handleSignIn } from '../../lib/Api/Api';


function SignIn() {
    const { register, handleSubmit, formState: { errors, isLoading } } = useForm({
        resolver: zodResolver(singinSchema)
    });

    return (
        <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col gap-5">
            <div className="signup flex flex-col gap-y-5">
                <div>
                    <Input {...register("email")} id="email" type="email" label="Input Email" placeholder="Enter your email." />
                    {errors.email?.message && <p className='text-red-600'>{errors.email.message}</p>}

                </div>
                <div>
                    <Input {...register("password")} id="password" type="password" label="Input password" placeholder="Enter your password." />
                    {errors.password?.message && <p className='text-red-600'>{errors.password.message}</p>}
                </div>

            </div>
            <button disabled={isLoading} className="px-3 py-2 bg-slate-900 text-amber-50 rounded-sm cursor-pointer">
                Sign In
            </button>
        </form>
    )
}

export default SignIn