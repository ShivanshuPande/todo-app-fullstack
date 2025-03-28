import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Todospage from './components/Todospage';
import SignUp from './components/SignUp';
import Signin from './components/Signin';

function App() {
  
  const [todos , setTodos] = useState([]);

  const fetchTodos = async ()=>{
    const token = localStorage.getItem("token")
    try{const response = await axios.get("http://localhost:3000/todos" ,{
      headers : {
        "Authorization" : token
      }
    })
    setTodos(response.data.todos)
    }catch{
        console.log("Error Fetching todos")
    }
  };
  useEffect( ()=>{
    fetchTodos();
    } ,[])

    const addTodos = async (newTodo) => {
      try {
        // First, send the new todo to the backend
        const token = localStorage.getItem("token");
        await axios.post("http://localhost:3000/todos", newTodo, {
          headers: {
            "Authorization": token
          }
        });
        
        // Then refetch all todos to ensure consistency
        await fetchTodos();
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/todos' element={<Todospage todos={todos} addTodos={addTodos}/>}></Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App