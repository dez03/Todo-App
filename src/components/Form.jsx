function TODOForm({ onAdd }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = event.target.todo.value.trim();
    if (newTodo) {
      onAdd(newTodo);
      event.target.reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-4 mt-6 max-w-lg mx-auto"
    >
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Add a new task..."
        className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add
      </button>
    </form>
  );
}

export default TODOForm;