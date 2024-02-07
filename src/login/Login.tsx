import { AppDispatch } from '../redux/store'
import { setFact, setLanguage, setToken } from '../redux/userSlice'
import { useDispatch } from 'react-redux'

export default function Login() {

    const dispatch = useDispatch<AppDispatch>()

    function login() {
        dispatch(setToken("ABC"))
        dispatch(setLanguage("hindi"))
        dispatch(setFact())
    }

    return (
        <div>
            Login
            <input></input>
            <input></input>
            <button onClick={login}>LOGIN</button>
        </div>
    )
}
