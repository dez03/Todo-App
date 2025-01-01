function TODOList({
  todos,
  onDelete,
  onEdit,
  onComplete,
  editingIndex,
  editingText,
  setEditingText,
  saveEdit,
  cancelEdit,
}) {
  return (
    <ul className="mt-6 space-y-4 max-w-lg mx-auto">
      {todos.map((todo, index) => (
        <li
          key={index}
          className={`flex items-center p-4 rounded-lg shadow-sm ${
            todo.completed ? "bg-green-100" : "bg-gray-100"
          }`}
          style={{ minWidth: "400px" }} // Ensures consistent width
        >
          {editingIndex === index ? (
            <div className="flex items-center w-full">
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => saveEdit(index)}
                className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Save
              </button>
              <button
                onClick={cancelEdit}
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex w-full items-center justify-between">
              <span
                className={`text-lg cursor-pointer ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => onEdit(index)}
              >
                {index + 1}. {todo.text}
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onComplete(index)}
                  className={`px-4 py-2 rounded-lg focus:outline-none ${
                    todo.completed
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                  disabled={todo.completed}
                >
                  Complete
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg"
                  aria-label={`Delete ${todo.text}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TODOList;