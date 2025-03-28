import CreateTodo from "./CreateTodo";
import Todo from "./Todo";


export default function Todospage({todos , addtodo}){
    return(
        <>
            <CreateTodo addTodo={addtodo}/>
            <Todo todos={todos}/>
        </>
    )
}