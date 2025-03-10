import { useState } from "react";
export function Todo({tozdos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>

        })}
    </div>

} 
//render network for backend
// vercel for frontend also netify maybe a option

// so backend has to be deployed as well the frontend
//front end will fetch from the deployed backend 
