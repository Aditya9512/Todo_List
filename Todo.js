import React from "react";

function Todo({todo}) {
    return (
        <div>
            <h4>{todo.Task}</h4>
            <p>{todo.Description}</p>
            <button className="btn btn-sm btn-danger">Delete</button>
        </div>
    )
}

export default Todo;