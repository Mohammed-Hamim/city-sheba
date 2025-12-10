import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from './Logo';
import useAuth from '../hooks/useAuth';
import Loading from './Loading';

const Navbar = () => {
    const { loading, user } = useAuth()
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-issue">All-Issue</NavLink></li>

    </>
    console.log(loading, user)

    if(!user) return <Loading></Loading>
    return (
        <div className="navbar py-2 bg-green-50  text-gray-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-white rounded-box z-1 space-y-2 mt-3 w-52 p-2 shadow text-gray-700">

                        {links}
                    </ul>
                </div>

                <Logo></Logo>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-2 px-1 text-gray-700 font-medium">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                <button className='bg-green-600 btn text-white font-semibold '>
                    <Link to='/register'>Register</Link>
                </button>
            </div>
        </div>

    );
};

export default Navbar;