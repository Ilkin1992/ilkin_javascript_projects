import { useContext } from "react";
import TodoContext from "./context/TodoContext";
import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  const { todos, deleteTodo } = useContext(TodoContext);
  return (
    <div className="app">
      <Header />
      <AddTodo />
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo} 
            text={todo.text}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default App;
