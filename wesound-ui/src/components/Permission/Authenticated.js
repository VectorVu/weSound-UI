import useAuth from "../../hooks/useAuth";

export default function Authenticated({children}){
    const {isAuthenticated} = useAuth();
    if(isAuthenticated){
        return children;
    }
    return null;
}