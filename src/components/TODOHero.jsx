function TODOHero({ todos_completed, total_todos }) {
  return (
    <div className="text-center p-4 bg-blue-500 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2">Your Todo Progress</h1>
      <p className="text-lg">
        You have completed <span className="font-bold">{todos_completed}</span>{" "}
        out of <span className="font-bold">{total_todos}</span> tasks.
      </p>
    </div>
  );
}

export default TODOHero;