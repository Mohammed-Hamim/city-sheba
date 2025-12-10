import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { useNavigate } from 'react-router';

const NavModal = ({ isOpen, setIsOpen, user_name, user_email, LogOut }) => {
const navigate = useNavigate()
    const handleLogOut = () => {
        LogOut()
            .then(res => {
                console.log(res)

                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className="relative">
            {/* Modal */}
            {isOpen && (
                <div className="absolute right-0  mt-3  md:min-w-[300px] bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4">
                        <p className="font-semibold flex gap-2 items-center text-gray-800"><span><FaRegUser size={24} /></span>{user_name}</p>
                        <p className="text-gray-500 flex gap-2 items-center text-sm"> <MdOutlineEmail size={24} />{user_email}</p>
                    </div>
                    <hr />
                    <ul className="p-2">
                        <li>
                            <button className="w-full text-left px-2 py-1 hover:bg-green-100 rounded">
                                Dashboard
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={handleLogOut}
                                className="w-full text-left px-2 py-1 hover:bg-red-100 rounded text-red-600">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            {/* click outside to close */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default NavModal;