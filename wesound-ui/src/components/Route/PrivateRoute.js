import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function PrivateRoute(){
    const {isAuthenticated} = useAuth();
    const location = useLocation();
    if(!isAuthenticated) return <Navigate to={`login?preUrl=${location.pathname}`}/>

    return <Outlet/>
    
}