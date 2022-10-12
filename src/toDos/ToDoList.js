import React from "react";
import TodoListItem from './ToDoListItem'

const TodoList = ({ todos }) =>(
    <div className="list-wrapper">
        {todos.map(todo => <TodoList todos={todo}/>)}
    </div>
)

export default TodoList;