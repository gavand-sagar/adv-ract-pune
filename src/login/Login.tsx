import React from 'react'

export default function Login() {
    
    function login(){
        localStorage.setItem('token',"ABC")
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
