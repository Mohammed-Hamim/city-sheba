import React from 'react';
import logoimg from '../assets/logo2.png'

const Logo = () => {
    return (
        <div>
            <div className='flex justify-center  items-center'>
                <img src={logoimg}  className='h-12' alt="" />
                <span className='text-3xl  mt-4 -ml-1 font-bold text-green-500'>itySheba</span>
            </div>
        </div>
    );
};

export default Logo;