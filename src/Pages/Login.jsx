import React, { useState } from 'react'
import SignIn from '../Components/SignIn/SignIn';
import Register from '../Components/Register/Register';
import locationIcon from "../assets/location-icon.png"
import communityIcon from "../assets/community-icon.png"
import eventIcon from "../assets/event-icon.png"
import starIcon from "../assets/star-icon.png"

function Login() {
    const [isSignInPage, setIsSignInPage] = useState(true);
    return (
        <div className="flex w-full justify-between ">
            <div
                className=" w-full min-h-screen min-w-100 
  flex-col gap-10 p-4 sm:p-5 md:p-20 bg-slate-800 text-amber-50 hidden sm:hidden md:hidden lg:hidden xl:flex 2xl:flex"
            >
                <h1 className="font-bold  text-white text-5xl">SpotLink.</h1>
                <span className=" font-semibold text-slate-300 text-3xl tracking-wide">Discover. Connect. Engage</span>
                <p className="text-slate-500 text-xl  font-semibold max-w-2xl">Join SpoLink to discover and create events based on shred interests and locations. Connect with like-minded individuals and build meaningful social experiences.</p>
                <ul className='flex flex-col gap-20'>
                    <li className='flex gap-5'>
                        <img className='h-[42px]' src={locationIcon} alt="location icon" />
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-2xl text-slate-100 font-semibold'>Location-Based discovery</h2>
                            <span className='text-xl text-slate-500 font-normal'>Find events and activities happening near you.</span>
                        </div>
                    </li>
                    <li className='flex gap-5'>
                        <img className='h-[42px]' src={communityIcon} alt="location icon" />
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-2xl text-slate-100 font-semibold'>Community Building</h2>
                            <span className='text-xl text-slate-500 font-normal'>Meet people who share your interests and passions.</span>
                        </div>
                    </li>
                    <li className='flex gap-5'>
                        <img className='h-[42px]' src={eventIcon} alt="location icon" />
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-2xl text-slate-100 font-semibold'>Create & Organize</h2>
                            <span className='text-xl text-slate-500 font-normal'>Host your own events and build your community.</span>
                        </div>
                    </li>
                    <li className='flex gap-5'>
                        <img className='h-[42px]' src={starIcon} alt="location icon" />
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-2xl text-slate-100 font-semibold'>Ratings & Reviews</h2>
                            <span className='text-xl text-slate-500 font-normal'>Find quality events with community ratings.</span>
                        </div>
                    </li>
                </ul>
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
                    <div className="flex justify-around gap-2 py-2 px-2 rounded-md mb-5 bg-gray-200 w-full">
                        <button onClick={() => setIsSignInPage(() => true)} className={isSignInPage ? " cursor-pointer py-2 w-[50%] md:px-20 bg-white rounded-sm " : "cursor-pointer py-2 w-[50%] md:px-20  rounded-sm  hover:bg-slate-100"}>Sign In</button>
                        <button onClick={() => setIsSignInPage(() => false)} className={!isSignInPage ? "cursor-pointer py-2 w-[50%] md:px-20 bg-white rounded-sm" : "cursor-pointer py-2 w-[50%] md:px-20  rounded-sm hover:bg-slate-100"}>Sign Up</button>
                    </div>

                    {isSignInPage ? <SignIn /> : <Register />}

                </div>
            </div>
        </div >)
}

export default Login