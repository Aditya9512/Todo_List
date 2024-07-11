import Todo from "../MyComponents/Todo";
import React from "react";

function Todos(props) {
    return (
        <div className="container">
            <h3 className="text-center">Todo's List:</h3>
            {props.todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    )
}

export default Todos;