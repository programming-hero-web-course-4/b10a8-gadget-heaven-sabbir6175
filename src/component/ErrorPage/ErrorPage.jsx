import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2 className='text-5xl font-extrabold text-center mt-40 mb-3'>Error page 401</h2>
            <NavLink to={"/"} >
                <a className='text-3xl font-bold text-center flex place-content-center underline text-red-500' href="">Back to Home page</a>
            </NavLink>
        </div>
    );
};

export default ErrorPage;