import axios from "axios"
import { useState } from "react"

export default function Signin() { 
    const [username , setusername] = useState("")
    const [password , setpassword] = useState("")

    const userHandler = (e)=>{
        const value = e.target.value;
        setusername(value)
    }

    const passHandler = (e)=>{
        const value = e.target.value;
        setpassword(value)
    }

    const payload = {
        username,
        password
    }

    const submitHandler = async()=>{
        const response =await axios.post("http://localhost:3000/signin" ,payload);
        if(response.status === 200){
            const token = response.data.token 
            localStorage.setItem("token" , `Bearer ${token}`)   
        }
        
    }
    return(
        <>
        <input placeholder="Username" type="text" value={username} onChange={userHandler}></input>
        <input placeholder="Password" type="text" value={password} onChange={passHandler}></input>
        <button onClick={submitHandler}>Sign In</button>
        </>
    )
}