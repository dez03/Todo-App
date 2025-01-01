"use client";
import React, { useState } from "react";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";
import TODOForm from "./components/Form";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleEdit = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index].text);
  };

  const saveEdit = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editingText;
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditingText("");
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditingText("");
  };

  const markComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-6">
      <TODOHero
        todos_completed={todos.filter((todo) => todo.completed).length}
        total_todos={todos.length}
      />
      <TODOForm onAdd={addTodo} />
      <TODOList
        todos={todos}
        onDelete={deleteTodo}
        onEdit={toggleEdit}
        onComplete={markComplete}
        editingIndex={editingIndex}
        editingText={editingText}
        setEditingText={setEditingText}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  );
}

export default App;