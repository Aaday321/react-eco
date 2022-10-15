import React from "react";
import ToDoListItem from './ToDoListItem'
import NewToDoForm from "./NewToDoForm";


const ToDoList = ({
    todos = [
        {content: "Sup"},
        {content: "YOLO!"}
    ]
}) =>(
    <div className="list-wrapper">
        <NewToDoForm/>
        {todos.map((todo) => (
            <ToDoListItem 
                todo={todo}
            />
        ))}
    </div>
)

export default ToDoList;