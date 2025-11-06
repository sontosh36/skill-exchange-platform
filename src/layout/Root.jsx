import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <NavBar/>
            <Outlet/>
            <Footer/>
             <ToastContainer
                position='bottom-right'
                autoClose={5000}
                hideProgressBar= {false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </div>
        
    );
};

export default Root;