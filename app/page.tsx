import { TodoList } from "./components/ToDo";
import { Button } from "./components/Button";
export default function Home() {
  return (
    <div>
      <TodoList />
      <Button label="Create note" url="/newNote" customClasses="buttonGlobal" />
    </div>
  );
}
