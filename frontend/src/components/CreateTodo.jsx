import axios from "axios";
import { useState } from "react"

export default function CreateTodo({addTodos}){
        
        const [title , setTitle] = useState("");
        const [description ,setdescription] = useState("");
        const [titleError , settitleError]  = useState("");
        const [descriptionError ,  setdescriptionError] = useState("");

        const titleHandler = (e)=>{ 
            const value = e.target.value;
            if(value.length > 50 ){
                settitleError("The title cannot be more than 50 characters")
            }else{
                settitleError(null)
                setTitle(value)
            }
        }

        const descriptionHandler = (e)=>{ 
            const value = e.target.value;
            if(value.length >  200 ){
            setdescriptionError("The description cannot be more than 200 characters")
            }else{
                setdescriptionError(null)
                setdescription(value)
            }
        }

        
        const submitHandler= async ()=>{
            const payload ={
                title:title ,
                description : description
            };
            const token = localStorage.getItem("token")
            const response = await axios.post("http://localhost:3000/todos" , payload , {
                headers:{
                    Authorization : token      
                }
            })
            
            addTodos(response.data);
            setTitle("");
            setdescription("");
            
        }


        return <>
            <input placeholder="Title"  type="text" value={title} onChange={titleHandler}></input>
            {titleError ? <p>{titleError}</p> :null}
            <input placeholder="description" type="text" value={description} onChange={descriptionHandler}></input>
            {descriptionError ? <p>{descriptionError}</p>: null}
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
                "  onClick={submitHandler}>Create</button>
        </>
}   