import React from "react";
import { authContext } from "../App";

function useAuth(){
    const {user, login, logout} = React.useContext(authContext);
    const isAuthenticated = !!user;
    return{
        user,
        login,
        logout,
        isAuthenticated
    }
}
export default useAuth;