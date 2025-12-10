import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <>
       <div className='container mx-auto'>
         <Navbar></Navbar>
       </div>
       <div className='container mx-auto px-4 md:px-0 min-h-60 md:min-h-screen my-4 md:my-10'>
         <Outlet></Outlet>
       </div>
        <div className='container mx-auto'>
          <Footer></Footer>
        </div>
            
        </>
    );
};

export default RootLayout;