import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useRouteGuard(){
    const [isLoggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setLoggedIn(true)
        } else {
            navigate('/login')
        }
    }, [])

    return isLoggedIn;
}