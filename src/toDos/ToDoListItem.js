import React from "react";

const ToDoListItem = (props) =>(
    <div className="todo-item-container">
        <h3>
            {props.todo.content}
        </h3>
        <div className="btn-container">
            <button className="done-btn">Mark As Completed</button>
            <button className="remove-btn">Remove</button>
        </div>
    </div>
)

export default ToDoListItem;