import React from 'react';

//Creates Todo object with the task, and Completed/Delete buttons
const Todo = ({ text, todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () => {
        setTodos(
            todos.filter((item) => item.id !== todo.id));
        console.log(todo);
    };

    const completeHandler = () => {
        setTodos(
            todos.map(item => {
                if(item.id === todo.id) {
                    //console.log(todo);
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>

            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo