import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <>
        <Navbar></Navbar>
       <div className='min-h-screen'>
         <Outlet></Outlet>
       </div>
        <Footer></Footer>
            
        </>
    );
};

export default RootLayout;