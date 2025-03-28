import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Todospage from './components/Todospage';
import SignUp from './components/SignUp';
import Signin from './components/Signin';

function App() {
  
  const [todos , setTodos] = useState([]);

  useEffect( ()=>{
    const fetchTodos = async ()=>{
        const token = localStorage.getItem("token")
        try{const response = await axios.get("http://localhost:3000/todos" ,{
          headers : {
            "Authorization" : token
          }
        })
        setTodos(response.data)
        }catch{
            console.log("Error Fetching todos")
        }
    };

    fetchTodos();
    } ,[])

    const addTodos = (newTodo)=>{
      setTodos([...todos , newTodo]);
    }



  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/todos' element={<Todospage todos={todos} addtodo={addTodos}/>}></Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App