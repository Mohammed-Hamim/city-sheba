import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegistration = (data) => {
        console.log(data)
    }
    return (
        <div className="  flex items-center justify-center   ">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
                    Create an Account
                </h2>
                <form onSubmit={handleSubmit(handleRegistration)}
                    className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter your name"
                        />
                        {errors.name?.type === "required" && <p className='text-red-500 text-sm'>
                            Name is required</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter your email"
                        />
                        {errors.email?.type === "required" && <p className='text-red-500 text-sm'>
                            Email is required</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
                            })}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter your password"
                        />
                        {errors.password?.type === "required" && <p className='text-red-500 text-sm'>
                            Password is required</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500 text-sm'>
                            Password must be 6 characters or longer</p>}
                        {errors.password?.type === "pattern" && <p className='text-red-500 text-sm'>
                            Password must contain at least one uppercase, one lowercase and one number </p>}
                    </div>

                    {/* Profile Image */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Profile Image
                        </label>
                        <input
                            type="file"
                            {...register("image")}
                            className="w-full text-gray-700"
                        />
                    </div>

                    {/* Signup Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <hr className="flex-1 border-gray-300" />
                    <span className="mx-2 text-gray-400">OR</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Google Login */}
                <button

                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition"
                >
                    <FcGoogle size={24} />
                    Continue with Google
                </button>

                {/* Login Link */}
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-green-600 font-medium hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;