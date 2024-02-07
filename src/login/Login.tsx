import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '../redux/store'
import { setFact, setLanguage, setToken } from '../redux/userSlice'
import { useDispatch } from 'react-redux'

export default function Login() {

    const dispatch = useDispatch<AppDispatch>()

    const navigate = useNavigate()

    function login() {
        dispatch(setToken("ABC"))
        dispatch(setLanguage("hindi"))
        dispatch(setFact())
        navigate("/dashboard")

    }

    return (
        <div>
            Login
            <input></input>
            <input></input>
            <button data-testid='btn' onClick={login}>LOGIN</button>
        </div>
    )
}
