import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus}) => {
    //JS code and methods below (before return statement)
    const inputTextHandler = (event) => {
        console.log(event.target.value);
        setInputText(event.target.value);
    }; 
    const submitTodoHandler = (event) => {
        event.preventDefault();

        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1234}
        ])
        //setTodos is run when a new "todo" object is created, then added to the
        //setTodo array with a random id (use package for this later on)
        setInputText("");
    };
    const statusHandler = (event) => {
      setStatus(event.target.value)
    }

    return (
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>
    );
};

export default Form;