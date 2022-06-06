import useAuth from "../../hooks/useAuth";

export default function NotAuthenticated({children}){
    const {isAuthenticated} = useAuth();
    if(!isAuthenticated){
        return children;
    }
    return null;
}