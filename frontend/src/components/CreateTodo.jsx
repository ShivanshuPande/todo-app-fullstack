import { application } from "express"

export function CreateTodo(){
    //study react - query as well   
    return <div>
        <input style={{padding:10 , margin:10 }} type ="text" placeholder="Title"></input><br />//use onChange hook from react
        <input style={{padding:10 , margin:10}} type ="text" placeholder="Description"></input>
        <br />
        <br />
        <button style={{padding:10 , margin:10}} onClick={()=>{
            fetch("https://localhost:3000/todos" , {
                method : "POST" ,
                body :JSON.stringify({
                    title : title , 
                    description : description
                }),
                headers:{
                    "Content-type" :"application/json"
                }
            })
        }}> Add Todo</button>
    </div>
}