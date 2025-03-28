import axios from "axios";
import { useState } from "react"

    export default function CreateTodo(){
        
        const [title , setTitle] = useState("");
        const [description ,setdescription] = useState("");
        const [titleError , settitleError]  = useState("");
        const [descriptionError ,  setdescriptionError] = useState("");

        const titleHandler = (e)=>{ 
            const value = e.target.value;
            if(value.length === 50 ){
                settitleError("The title cannot be more than 50 characters")
            }else{
                settitleError(null)
                setTitle(value)
            }
        }

        const descriptionHandler = (e)=>{ 
            const value = e.target.value;
            if(value.length ===  200 ){
            setdescriptionError("The description cannot be more than 200 characters")
            }else{
                setdescriptionError(null)
                setdescription(value)
            }
        }

        const payload ={
            title:title ,
            description : description
        }

        const submitHandler= ()=>{
            axios.post("http://localhost:3000/todos" , payload , {
                headera:{
                    Authorization : `Bearer ${token}`      
                }
            })
        }


        return <>
            <input placeholder="Title"  type="text" value={title} onChange={titleHandler}></input>
            {titleError ? <p>{titleError}</p> :null}
            <input placeholder="description" type="text" value={description} onChange={descriptionHandler}></input>
            {descriptionError ? {descriptionError} : null}
            <button onClick={submitHandler}></button>
        </>
    }