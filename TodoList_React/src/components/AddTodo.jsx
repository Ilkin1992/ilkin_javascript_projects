import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function AddTodo() {
  const { addTodo, input, setInput } = useContext(TodoContext);

  return (
    <div>
      <form onSubmit={addTodo} className="submit_todos" id="submit_todos">
        <input
          className="todo_input"
          id="todo_input"
          type="text"
          name="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add_button">Add a todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
