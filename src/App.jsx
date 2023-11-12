import { useState } from "react";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";
export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo (title) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }


  return (
    <>
     <TodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo (but maybe not)List</h1>
     <TodoList todos={todos}/>
    </>
  );
}
