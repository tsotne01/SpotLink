import React, { useState } from "react";

const SignUp = () => {
    const [isSignUp, setIsSignUp] = useState(true);
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
                    <h1 className="font-semibold text-3xl text-slate-700 mb-10">
                        Welcome to SpotLink!
                    </h1>
                    <div className="flex justify-around py-2 mb-5 bg-gray-200 w-full">
                        <button onClick={() => setIsSignUp(() => true)} className={isSignUp ? "py-2 px-5 md:px-20 bg-white rounded-sm" : "py-2 px-5 md:px-20  rounded-sm"}>Sign Up</button>
                        <button onClick={() => setIsSignUp(() => false)} className={!isSignUp ? "py-2 px-5 md:px-20 bg-white rounded-sm" : "py-2 px-5 md:px-20  rounded-sm"}>Sign In</button>
                    </div>
                    <form className="flex flex-col gap-5">
                        {isSignUp ? <div className="signup">
                            <div className="w-full flex flex-col gap-1.5">
                                <label className="block text-slate-500" htmlFor="email">
                                    Input Email:
                                </label>
                                <input
                                    className="block border border-slate-600 p-2 rounded-sm w-full"
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="w-full flex flex-col gap-1.5">
                                <label className="block text-slate-500" htmlFor="password">
                                    Input Password:
                                </label>
                                <input
                                    className="block border border-slate-600 p-2 rounded-sm w-full"
                                    type="email"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div> : <div className="signup">
                            <div className="w-full flex flex-col gap-1.5">
                                <label className="block text-slate-500" htmlFor="email">
                                    Input Email:
                                </label>
                                <input
                                    className="block border border-slate-600 p-2 rounded-sm w-full"
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="w-full flex flex-col gap-1.5">
                                <label className="block text-slate-500" htmlFor="password">
                                    Input Password:
                                </label>
                                <input
                                    className="block border border-slate-600 p-2 rounded-sm w-full"
                                    type="email"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>}

                        <button className="px-3 py-2 bg-slate-900 text-amber-50 rounded-sm">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
