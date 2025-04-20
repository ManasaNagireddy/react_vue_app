//import bootbox from "bootbox";
import { useState } from "react";
function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const addTodo = () => {
    var input = document.getElementById("Todo") as HTMLInputElement;
    var todo = input.value;
    if (todo === "") {
      alert("Please enter a todo");
      return;
    } else {
      input.value = "";
      console.log(editIndex);
      if (editIndex !== null) {
        // Update existing todo
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = todo;
        setTodos(updatedTodos);
        setEditIndex(null); // Reset editing state
      } else {
        // Add new todo
        setTodos([...todos, todo]);
      }
    }
  };
  const editTodo = (index: number) => {
    var input = document.getElementById("Todo") as HTMLInputElement;

    input.value = todos[index];
    setEditIndex(index); // Set which todo is being edit
  };
  const deleteTodo = (index: number) => {
    if (confirm("Are you sure you want to delete this todo?") == true) {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
      if (editIndex === index) setEditIndex(null); // Reset edit if deleted
    }
  };
  const displaylist = todos.map((todo, index) => {
    return (
      <div
        key={index}
        className="list-group-item list-group-item-action d-flex justify-content-start align-items-center"
      >
        <span className="me-2">
          {index + 1}. {todo}
        </span>
        <span
          className="fa fa-edit m-2"
          onClick={() => editTodo(index)}
          style={{ cursor: "pointer" }}
        >
          Edit
        </span>
        <span
          className="fa fa-trash m-2"
          onClick={() => deleteTodo(index)}
          style={{ cursor: "pointer" }}
        >
          Delete
        </span>
      </div>
    );
  });
  return (
    <div className="flex flex-col gap-4 m-3">
      <input
        type="text"
        name="Todo"
        id="Todo"
        className="border-2 border-gray-300 rounded-md p-2"
        placeholder="Enter your todo"
      />
      <button
        onClick={addTodo}
        className="bg-blue-500 text-white rounded-md p-2 bg-success"
      >
        Add Todo
      </button>
      {displaylist.length > 0 ? (
        <div className="list-group">{displaylist}</div>
      ) : (
        <div className="bg-gray-200 p-2 rounded-md">No todos added yet</div>
      )}
    </div>
  );
}
export default TodoList;
// Compare this snippet from src/components/Sliders.tsx:
