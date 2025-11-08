import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    if (loading) {
        return <span className='loading loading-spinner text-success'></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location?.pathname} to={'/signin'}></Navigate>;
};

export default PrivateRoutes;