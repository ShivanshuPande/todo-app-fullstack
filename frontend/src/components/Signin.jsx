import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signin() { 
    const [username , setusername] = useState("")
    const [password , setpassword] = useState("")
    const [response , setresponse] = useState(true)
    const navigate = useNavigate();
    const userHandler = (e)=>{
        const value = e.target.value;
        setusername(value)
    }

    const passHandler = (e)=>{
        const value = e.target.value;
        setpassword(value)
    }



    const submitHandler = async () => {
        console.log("data is posted");
    
        const payload = {
            username,
            password
        };
    
        try {
            const response = await fetch("http://localhost:3000/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
    
            if (response.status === 200) {
                const data = await response.json();
                const token = data.token;
                localStorage.setItem("token", `Bearer ${token}`);
                console.log("Token:", token);
                navigate("/todos")
            } else if (response.status === 411) {
                console.error("Invalid inputs. Please check username and password.");
                setresponse(false)
            } else {
                console.error("Unexpected error occurred.");
            }
        } catch (err) {
            console.error("Error occurred:", err.message);
        }
    };

    console.log("from the Signin file")
    return(
        <>
        
        <input placeholder="Username" type="text" value={username} onChange={userHandler}></input>
        <input placeholder="Password" type="text" value={password} onChange={passHandler}></input>
        <button className="
                    px-4 py-2 
                    text-white 
                    bg-blue-500 
                    rounded 
                    hover:cursor-pointer 
                    hover:bg-blue-600 
                    active:bg-green-500 
                    transition-all 
                    duration-300
                " onClick={submitHandler}>Sign In</button>
        {response ? null : <p>User does not exist</p>}
        </>
        
    )
}