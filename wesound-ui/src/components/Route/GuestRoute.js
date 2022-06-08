import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function GuestRoute(){
    const {user} = useAuth();
    if(user) return <Navigate to={'/'} replace/>

    return <Outlet/>
    
}