import React from "react";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const registrationSchema = z.object({
    username: z.string().min(3),
    email: z.string().email().min(1),
    password: z.string().min(8),
    confirmpassword: z.string().min(8)
}).refine(data => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });

const Register = () => {
    const { register, handleSubmit, formState: { errors, isLoading } } = useForm({
        resolver: zodResolver(registrationSchema)
    });
    const handleRegistration = (data)=>{
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(handleRegistration)} className="flex flex-col gap-5">
            <div className="signup flex flex-col gap-5">
                <div className="w-full flex flex-col gap-2">
                    <Input {...register("username")}label="User Name" placeholder="Choose username" type="text" id="username" />
                    {errors.username?.message && <p className="text-red-500">{errors.username.message}</p> }
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Input {...register("email")} label="Email" placeholder="Enter your email" type="email" id="email" />
                    {errors.email?.message && <p className="text-red-500">{errors.email.message}</p> }

                </div>
                <div className="w-full flex flex-col gap-2">
                    <Input {...register("password")} label="Password" placeholder="Create your password" type="password" id="password" />
                    {errors.password?.message && <p className="text-red-500">{errors.password.message}</p> }

                </div>
                <div className="w-full flex flex-col gap-2">
                    <Input {...register("confirmpassword")} label="Confirm Password" placeholder="Enter your email" type="password" id="confirmpassword" />
                    {errors.confirmpassword?.message && <p className="text-red-500">{errors.confirmpassword.message}</p> }
                </div>
            </div>

            <button disabled={isLoading} className="px-3 py-2 bg-slate-900 text-amber-50 rounded-sm cursor-pointer">
                Register
            </button>

        </form>

    );
};

export default Register;
