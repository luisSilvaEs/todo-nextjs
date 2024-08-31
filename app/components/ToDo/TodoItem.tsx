import { Button } from "./../Button";

interface TodoItemProps {
  id: number;
  task: string;
}

const TodoItem = ({ id, task }: TodoItemProps) => {
  return (
    <li key={id} className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4 text-slate-100">
        <input
          id={`${id}`}
          type="ckeckbox"
          className="w-5 h-5 cursor-pointer peer"
        />
        <label
          htmlFor={`${id}`}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {task}
        </label>
      </div>
      <div className="flex items-center gap-x-2">
        <Button label="Move up" customClasses="arrow-up" />
        <Button label="Move down" customClasses="arrow-down" />
      </div>
    </li>
  );
};

export default TodoItem;
