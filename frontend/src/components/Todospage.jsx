import CreateTodo from "./CreateTodo";
import Todo from "./Todo";


export default function Todospage({todos , addTodos}){
    return(
        <>
            <CreateTodo addTodos={addTodos}/>
            <Todo todos={todos}/>
        </>
    )
}