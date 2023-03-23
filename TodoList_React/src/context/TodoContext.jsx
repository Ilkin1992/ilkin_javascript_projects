import { createContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  //App-level state
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch todos
  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:5000/todos");
    const data = await response.json();
    setTodos(data);
  };

  //Function that allows adding new todos
  const [input, setInput] = useState("");
  //Generate and add new todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (input !== "") {
      const newTodo = {
        text: input,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
      //Add todos to the backend
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
    }
  };

  //Function that allows deleting todos
  const deleteTodo = async (id) => {
    if (window.confirm("Are you sure you really want to delete?")) {
      await fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" });
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, input, setInput }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
