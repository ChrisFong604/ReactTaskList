//!!!!!! Stopped at 43:00 in video

import React, {useState, useEffect} from "react";
//useEffect allows us to run a function upon state change
import './App.css';
//Importing Components
import Form from './components/Form.js';
import TodoList from "./components/TodoList.js";

/* App() is akin to a class that contains the overall state of the tasklist; 
  e.g tasks, completion of tasks, task-names, etc.
  It also passes the data down to child function/classes in Form.js, TodoList.js, and Todo.js
  which render out the information and have their own methods to manipulate the state of App()
*/
function App() {
  //States; All states are initialized below and are passed down to the separate components
  const [inputText, setInputText] = useState(""); 
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Runs only once at app initialization, then continues to run as app is functioning
  useEffect(() => {
    getLocalTodos();
  }, []);

  //The useEffect methods for filtering the status of a task, differentiating between incomplete
  //complete, and all(default), and also concurrent save upon each modification of the tasklist
  useEffect (() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]); //The array indicates the states that are detected in useEffect

  //filerHandler differentiates the states of each task between completed, incomplete, and all
  const filterHandler = () => {
    switch(status) {
      case 'completed': 
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'incomplete': 
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      console.log(localTodos);
      setTodos(localTodos);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Your To-Do list</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos}
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}


export default App; 
