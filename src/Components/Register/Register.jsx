import React, { useLayoutEffect } from "react";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "../../Schemas/Schemas";
import { getUser, handleRegistration } from "../../lib/Api/Api";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const { register, handleSubmit, formState: { errors, isLoading } } = useForm({
        resolver: zodResolver(registrationSchema),

    });
    const navigate = useNavigate();
    const registerHandler = (data)=>{
        handleRegistration(data);
        navigate("/Dashboard");
    }

    return (
        <div className="max-w-md mx-auto mt-8 md:mt-12 p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">

            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6 md:mb-8">
                Create Your Account
            </h2>

            <form onSubmit={handleSubmit(registerHandler)} className="space-y-5">

                <div>
                    <label htmlFor="username" className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Username
                    </label>
                    <input
                        {...register("username")}
                        placeholder="Choose a unique username"
                        type="text"
                        id="username"
                        className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-white"
                    />
                    {errors.username?.message && (
                        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                            {errors.username.message}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address
                    </label>
                    <input
                        {...register("email")}
                        placeholder="you@example.com"
                        type="email"
                        id="email"
                        className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-white"
                    />
                    {errors.email?.message && (
                        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="password" className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                    </label>
                    <input
                        {...register("password")}
                        placeholder="Create a strong password"
                        type="password"
                        id="password"
                        className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-white"
                    />
                    {errors.password?.message && (
                        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="confirmpassword" className="block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Confirm Password
                    </label>
                    <input
                        {...register("confirmpassword")}
                        placeholder="Re-enter your password"
                        type="password"
                        id="confirmpassword"
                        className="block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-50 dark:bg-gray-700 dark:text-white"
                    />
                    {errors.confirmpassword?.message && (
                        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                            {errors.confirmpassword.message}
                        </p>
                    )}
                </div>

                <button
                    disabled={isLoading}
                    type="submit"
                    className={`w-full px-5 py-3 mt-2 text-base font-medium text-center text-white rounded-lg transition duration-200 ease-in-out ${isLoading
                        ? 'bg-gray-400 cursor-not-allowed dark:bg-gray-600'
                        : 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        }`}
                >
                    {isLoading ? (
                        <div className="flex justify-center items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Registering...
                        </div>
                    ) : (
                        'Register'
                    )}
                </button>
            </form>
        </div>

    );
};

export default Register;
