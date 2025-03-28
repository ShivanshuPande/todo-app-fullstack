import axios from "axios";
import { useState } from "react"

    export default function CreateTodo({addTodo}){
        
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
            }else{ q    
                setdescriptionError(null)
                setdescription(value)
            }
        }

        const payload ={
            title:title ,
            description : description
        }
        const token = localStorage.getItem("token")
        const submitHandler= async ()=>{
            const response = await axios.post("http://localhost:3000/todos" , payload , {
                headers:{
                    Authorization : token      
                }
            })
            if(response.status === 201){
                addTodo(response.data);
                setTitle("");
                setdescription("");
            }
        }


        return <>
            <input placeholder="Title"  type="text" value={title} onChange={titleHandler}></input>
            {titleError ? <p>{titleError}</p> :null}
            <input placeholder="description" type="text" value={description} onChange={descriptionHandler}></input>
            {descriptionError ? <p>{descriptionError}</p>: null}
            <button onClick={submitHandler}>Create</button>
        </>
    }   