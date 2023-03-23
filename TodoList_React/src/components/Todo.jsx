import { useState } from "react";

function Todo({ todo, id, text, deleteTodo }) {
  const [completed, setCompleted] = useState(todo.isCompleted);

  const handleComplete = async () => {
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, isCompleted: !completed }),
    });
    setCompleted(!completed);
  };

  return (
    <div className="todo">
      <div>{text}</div>
      <div className="buttons">
        <button className="complete_button" onClick={handleComplete}>
          {completed ? "Completed" : "Incomplete"}
        </button>
        <button className="delete_button" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
