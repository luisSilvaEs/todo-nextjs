interface TodoItemProps {
  key: number;
  task: string;
}

const TodoItem = ({ key, task }: TodoItemProps) => {
  return (
    <li key={key} className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <p>{task}</p>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <input type="ckeckbox" className="cursor-pointer peer" />
      </div>
    </li>
  );
};

export default TodoItem;
