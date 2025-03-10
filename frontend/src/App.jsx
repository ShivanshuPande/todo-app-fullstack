import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.  svg'
import './App.css'
import { CreateTodo } from './components/createTodo'
import { Todo } from './components/Todo'

function App() {
  // const [todos , setTodo] = useState([])
  // fetch("http://localhost:3000/todos")
  // .then(async function (res) {
  //     const json = await res.json();
  //     setTodo(json.todos);
  // })

  const [todos,setTodo] = useState ([])
  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then(async function (res){
      const json = await res.json();
      setTodo(json.todos)
    } ,[todos])//run when the todos as a state variable changes
  })
  
  return (
    <div>
        <CreateTodo></CreateTodo>
        <Todo todos ={todos}></Todo>
    </div>
  )
}

export default App
// export nothing