import React, {useState} from "react";


const NewToDoForm = () =>{

    const [input, setInput] = useState('');




    return(
        <div className="new-todo-form">
            <input
                className="toDo-input"
                type="text"
                placeholder="Type your new todo here"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button className="new-todo-btn">Create To Do</button>
        </div>
    )

    
}

export default NewToDoForm;