import TodoItem from "./TodoItem";

const TodoList = () => {
  const notes = [
    {
      description: "Pick up mom",
      completed: false,
    },
    {
      description: "Buy groceries",
      completed: false,
    },
    {
      description: "Call brother",
      completed: false,
    },
  ];

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {notes.map((item, index) => (
        <TodoItem key={index} task={item.description} />
      ))}
    </ul>
  );
};

export default TodoList;
