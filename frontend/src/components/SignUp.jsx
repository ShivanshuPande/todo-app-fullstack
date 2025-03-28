export function Signup(){
    const [username , setusername] = useState("")
    const [password , setpassword] = useState("")
    const [response , setresponse] = useState("")
    
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

        const createHandler = async ()=>{
            const value = await axios.post("http://localhost:3000/signUp" ,payload);
            setresponse(value)
            
        }

        return (
            <>
            <input placeholder="Username" type="text" value={username} onChange={userHandler}></input>
            <input placeholder="Password" type="text" value={password} onChange={passHandler}></input>
            <button onClick={createHandler}>Create</button>
            {response}
            </>
        )
}