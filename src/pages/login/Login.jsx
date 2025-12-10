import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { logIn, googleSignIn } = useAuth()

    const { handleSubmit, register, formState: { errors } } = useForm()
    const handleLogIn = (data) => {
        console.log(data)
        logIn(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
                    Login to CitySheba
                </h2>
                <form onSubmit={handleSubmit(handleLogIn)}
                    className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter your email"
                        />
                        {errors.email?.type === "required"
                            && <p className='text-red-500 text-sm'>Email is required</p>
                        }
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register('password', {
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

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
                    >
                        Login
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <hr className="flex-1 border-gray-300" />
                    <span className="mx-2 text-gray-400">OR</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Google Login */}
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition"
                >
                    <FcGoogle size={24} />
                    Continue with Google
                </button>

                {/* Signup Link */}
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account?{" "}
                    <a href="/register" className="text-green-600 font-medium hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;