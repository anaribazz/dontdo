import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
  
    <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <TodoItem /*id={todo.id} completed={todo.completed} title={todo.title} key={todo.id}*/ {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            // <li key={todo.id}>
            //   <label>
            //     <input
            //       type="checkbox"
            //       checked={todo.completed}
            //       // onChange={ e => toggleTodo(todo.id, e.target.checked)}
            //     />
            //     {todo.title}
            //   </label>
            //   <button 
            //   // onClick={() => deleteTodo(todo.id)} 
            //   className="danger">Delete</button>
            // </li>
          );
        })}
      </ul>

)
}