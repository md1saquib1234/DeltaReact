import {useState} from "react";
import {v4 as uuid} from 'uuid';

export default function TodoList() {
  let [todos, setTodos] = useState([{task: "sample-task", id: uuid() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevaTodos) => {
     return [...todos, {task: newTodo, id: uuid()}] 
    });
    setNewTodo("");
  };


  let updateTodoValue = (event) => {
  setNewTodo(event.target.value);

  };

  let deleteTodo = (id) => {
   setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
  setTodos((prevTodos) => 
    prevTodos.map((todo) => {
      return {
        ...todo,
        task: todo.task.toUpperCase(),
      };
    })
  );
  };

  let UpperCaseOne = (id) => {
     setTodos((prevTodos) => 
     prevTodos.map((todo) => {
     if(todo.id == id) {
      return {
        ...todo,
        task: todo.task.toUpperCase(),
      };
     } else {
      return todo;
     } 
    })
  );
  };

  return (
    <div>
      <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />

      <hr />
      <h4>Task Todo</h4>
      <ul>
       { todos.map((todo) => (
          <li key={todo.id}>
           <span>{todo.task}</span>
           &nbsp;   &nbsp;    &nbsp;
           <button onClick={() =>deleteTodo(todo.id)}>delete</button>
           <button onClick={() =>UpperCaseOne(todo.id)}>UpperCase One</button>
            </li>
        ))}
      </ul>
      <br />
      <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  )
}