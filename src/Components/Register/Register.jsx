import React from "react";
import Input from "../Input/Input";

const Register = () => {
    return (
        <form className="flex flex-col gap-5">
            <div className="signup flex flex-col gap-5">
                <div className="w-full flex flex-col gap-2">
                    <Input label="User Name" placeholder="Choose username" type="text" id="username" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Input label="Email" placeholder="Enter your email" type="email" id="email" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Input label="Password" placeholder="Create your password" type="password" id="password" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Input label="Confirm Password" placeholder="Enter your email" type="password" id="confirmpassword" />
                </div>
            </div>

            <button className="px-3 py-2 bg-slate-900 text-amber-50 rounded-sm cursor-pointer">
                Register
            </button>

        </form>

    );
};

export default Register;
