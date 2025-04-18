import React, { useEffect, useLayoutEffect, useState } from 'react'
import SignIn from '../Components/SignIn/SignIn';
import Register from '../Components/Register/Register';
import locationIcon from "../assets/location-icon.png"
import communityIcon from "../assets/community-icon.png"
import eventIcon from "../assets/event-icon.png"
import starIcon from "../assets/star-icon.png"
import { getUser } from '../lib/Api/Api';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [isSignInPage, setIsSignInPage] = useState(true);   

    return (
        <div className="flex w-full min-h-screen bg-gray-100 dark:bg-gray-900">

            <div
                className="hidden xl:flex w-[450px] 2xl:w-[550px] flex-shrink-0 min-h-screen
                       flex-col gap-8 2xl:gap-10 p-10 2xl:p-14 bg-gradient-to-br from-slate-800 to-slate-900 text-amber-50"
            >
                <h1 className="font-bold text-white text-4xl 2xl:text-5xl">SpotLink.</h1>

                <div className="space-y-3 mt-2">
                    <span className="font-semibold text-slate-100 text-2xl 2xl:text-3xl tracking-wide block">Discover. Connect. Engage</span>
                    <p className="text-slate-300 text-base 2xl:text-lg font-normal max-w-lg">
                        Join SpotLink to discover and create events based on shared interests and locations. Connect with like-minded individuals and build meaningful social experiences.
                    </p>
                </div>

                <ul className='flex flex-col gap-6 2xl:gap-8 mt-8 flex-grow'>
                    <li className='flex items-start gap-4'>
                        <img className='h-[36px] w-[36px] flex-shrink-0 mt-0.5' src={locationIcon} alt="Location discovery icon" />
                        <div className='flex flex-col'>
                            <h2 className='text-lg 2xl:text-xl text-slate-100 font-medium'>Location-Based Discovery</h2>
                            <span className='text-sm 2xl:text-base text-slate-400 font-normal'>Find events and activities happening near you.</span>
                        </div>
                    </li>
                    <li className='flex items-start gap-4'>
                        <img className='h-[36px] w-[36px] flex-shrink-0 mt-0.5' src={communityIcon} alt="Community building icon" />
                        <div className='flex flex-col'>
                            <h2 className='text-lg 2xl:text-xl text-slate-100 font-medium'>Community Building</h2>
                            <span className='text-sm 2xl:text-base text-slate-400 font-normal'>Meet people who share your interests and passions.</span>
                        </div>
                    </li>
                    <li className='flex items-start gap-4'>
                        <img className='h-[36px] w-[36px] flex-shrink-0 mt-0.5' src={eventIcon} alt="Event creation icon" />
                        <div className='flex flex-col'>
                            <h2 className='text-lg 2xl:text-xl text-slate-100 font-medium'>Create & Organize</h2>
                            <span className='text-sm 2xl:text-base text-slate-400 font-normal'>Host your own events and build your community.</span>
                        </div>
                    </li>
                    <li className='flex items-start gap-4'>
                        <img className='h-[36px] w-[36px] flex-shrink-0 mt-0.5' src={starIcon} alt="Ratings icon" />
                        <div className='flex flex-col'>
                            <h2 className='text-lg 2xl:text-xl text-slate-100 font-medium'>Ratings & Reviews</h2>
                            <span className='text-sm 2xl:text-base text-slate-400 font-normal'>Find quality events with community ratings.</span>
                        </div>
                    </li>
                </ul>

                <p className="text-xs text-slate-500 mt-auto pt-6">
                    © {new Date().getFullYear()} SpotLink. All rights reserved. Batumi, Georgia.
                </p>

            </div>

            <div
                className="flex flex-col flex-grow w-full min-h-screen p-4 sm:p-8 justify-center items-center overflow-y-auto"
            >
                <div className="w-full max-w-md">


                    <div className="flex p-1 rounded-lg mb-6 bg-gray-200 dark:bg-gray-700/50">
                        <button
                            onClick={() => setIsSignInPage(true)}
                            type="button"
                            className={`flex-1 py-2 px-3 sm:px-4 rounded-md text-sm font-medium text-center transition-all duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 ${isSignInPage
                                ? 'bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-400 shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300/50 dark:hover:bg-gray-600/50 hover:text-gray-800 dark:hover:text-gray-200'
                                }`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setIsSignInPage(false)}
                            type="button"
                            className={`flex-1 py-2 px-3 sm:px-4 rounded-md text-sm font-medium text-center transition-all duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 ${!isSignInPage
                                ? 'bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-400 shadow-sm'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300/50 dark:hover:bg-gray-600/50 hover:text-gray-800 dark:hover:text-gray-200'
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {isSignInPage ? <SignIn /> : <Register />}
                </div>
            </div>
        </div>
    )
}

export default Login