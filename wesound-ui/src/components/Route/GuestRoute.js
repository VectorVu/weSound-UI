import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoute({user}){
    if(user) return <Navigate to={'/'} replace/>

    return <Outlet/>
    
}