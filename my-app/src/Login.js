import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const Login = ({updateState}) => {


    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        if (password === "tlc") {
            updateState(true)
            navigate("/my-profile")

            //localStorage.setItem("user", name)
        }

    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)

    }

    return <div>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <span>Name</span>
            <input type="text" name="Name" value={name} onChange={handleChangeName}/>
            </div>
            <div>
            <span>Password</span>
            <input type="password" name="Password" value={password} onChange={handleChangePassword}/>
            </div>
            <button type="submit" >Let's go</button>
        </form>

    </div>
}

export {Login}