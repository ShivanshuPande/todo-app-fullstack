import CreateTodo from "./CreateTodo";
import Todo from "./Todo";


export default function Todospage({todos , addTodo}){
    return(
        <>
            <CreateTodo addTodo={addTodo}/>
            <Todo todos={todos}/>
        </>
    )
}