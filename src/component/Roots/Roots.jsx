import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Roots = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
           <div className=''>
            <Outlet></Outlet>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Roots;