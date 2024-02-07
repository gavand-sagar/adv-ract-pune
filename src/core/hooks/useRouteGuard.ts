import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";

export function useRouteGuard(){
    const [isLoggedIn, setLoggedIn] = useState(false);
    const token = useSelector((s: RootState) => s.user.token)

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            setLoggedIn(true)
        } else {
            navigate('/login')
        }
    }, [])

    return isLoggedIn;
}