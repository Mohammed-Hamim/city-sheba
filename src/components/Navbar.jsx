import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-white shadow-sm text-gray-800">
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
                        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-700">
                        <li><a className="hover:text-blue-600">Item 1</a></li>
                        <li>
                            <a className="hover:text-blue-600">Parent</a>
                            <ul className="p-2 bg-gray-50 rounded-lg">
                                <li><a className="hover:text-blue-600">Submenu 1</a></li>
                                <li><a className="hover:text-blue-600">Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a className="hover:text-blue-600">Item 3</a></li>
                    </ul>
                </div>

                <a className="btn btn-ghost text-xl text-blue-600 font-bold">daisyUI</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-700 font-medium">
                    <li><a className="hover:text-blue-600">Item 1</a></li>
                    <li>
                        <details>
                            <summary className="hover:text-blue-600">Parent</summary>
                            <ul className="p-2 bg-white w-40 z-1 shadow rounded-box text-gray-700">
                                <li><a className="hover:text-blue-600">Submenu 1</a></li>
                                <li><a className="hover:text-blue-600">Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a className="hover:text-blue-600">Item 3</a></li>
                </ul>
            </div>

            <div className="navbar-end">
                <a className="btn bg-blue-600 hover:bg-blue-700 text-white px-5">Button</a>
            </div>
        </div>

    );
};

export default Navbar;