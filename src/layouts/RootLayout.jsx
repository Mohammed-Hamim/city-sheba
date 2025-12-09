import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <>
        <Navbar></Navbar>
       <div className='min-h-screen my-4 md:my-10'>
         <Outlet></Outlet>
       </div>
        <Footer></Footer>
            
        </>
    );
};

export default RootLayout;