
export default function Todo({todos}){
    return <div>
        {todos.map(function(todos){
            return <div>
                <h1>{todos.title}</h1>
                <h2>{todos.description}</h2>
                <br></br>
            </div>

        })}
    </div>

} 
