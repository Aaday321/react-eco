import React from "react";

const ToDoListItem = ({todo}) =>(
    <div className="todo-item-container">
        <h3>
            {todo.content}
        </h3>
        <div className="btn-container">
            <button className="done-btn">Mark As Completed</button>
            <button className="remove-btn">Remove</button>
        </div>
    </div>
)

export default ToDoListItem;