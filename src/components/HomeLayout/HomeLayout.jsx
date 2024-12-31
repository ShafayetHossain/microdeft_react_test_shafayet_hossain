import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            {/* <footer>footer</footer> */}
        </div>
    );
};

export default HomeLayout;