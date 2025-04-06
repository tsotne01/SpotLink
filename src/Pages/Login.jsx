import React, { useState } from 'react'
import SignIn from '../Components/SignIn/SignIn';
import Register from '../Components/Register/Register';

function Login() {
    const [isSignInPage, setIsSignInPage] = useState(true);
    return (
        <div className="flex w-full justify-between ">
            <div
                className=" w-full min-h-screen min-w-100 
  flex-col gap-10 p-4 sm:p-5 md:p-20 bg-slate-800 text-amber-50 hidden sm:hidden md:hidden lg:flex"
            >
                <h1 className="font-bold  text-white text-5xl">SpotLink.</h1>
                <span className=" font-semibold text-slate-300 text-3xl tracking-wide">Discover. Connect. Engage</span>
                <p className="text-slate-500 text-xl leading-12 font-semibold max-w-2xl">Join SpoLink to discover and create events based on shred interests and locations. Connect with like-minded individuals and build meaningful social experiences.</p>
            </div>
            <div
                className="flex flex-col w-full min-h-screen
   p-5 lg:p-20 justify-center items-center"
            >
                <div className="border border-solid border-slate-950 p-5 sm:p-6 md:p-10 lg:min-w-xl ms:min-w-60 sm:min-w-2xs rounded-sm">
                    <h1 className="font-semibold text-3xl text-slate-700 mb-3">
                        Welcome to SpotLink!
                    </h1>
                    <span className='block text-2xl mb-10 text-slate-500'>Sign in to your Account or create new one to get started.</span>
                    <div className="flex justify-around py-2 mb-5 bg-gray-200 w-full">
                        <button onClick={() => setIsSignInPage(() => true)} className={isSignInPage ? " cursor-pointer py-2 px-5 md:px-20 bg-white rounded-sm " : "cursor-pointer py-2 px-5 md:px-20  rounded-sm hover:border-slate-500 border hover:border-solid"}>Sign In</button>
                        <button onClick={() => setIsSignInPage(() => false)} className={!isSignInPage ? "cursor-pointer py-2 px-5 md:px-20 bg-white rounded-sm" : "cursor-pointer py-2 px-5 md:px-20  rounded-sm hover:border-slate-500 border hover:border-solid"}>Sign Up</button>
                    </div>

                    {isSignInPage ? <SignIn /> : <Register />}

                </div>
            </div>
        </div >)
}

export default Login