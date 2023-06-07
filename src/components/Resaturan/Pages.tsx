import { useState } from "react";
import { Task } from "./interface/Task";
import { produsts } from "./produsts";
import { Product } from "./Product";

interface Props {
  name: string;
}

export const Pages = ({ name }: Props) => {
  const [tasks, setTasks] = useState<Task[]>(produsts);

  function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
    const filterText = event.target.value.toLowerCase();
    const filteredTasks = produsts.filter(
      (task) =>
        task.name.toLowerCase().includes(filterText) ||
        task.producto.toLowerCase().includes(filterText) ||
        task.direction.toLowerCase().includes(filterText)
    );
    setTasks(filteredTasks);
  }

  return (
    <div className="text-center">
      <br></br>

      <form action="">
        <div className="container">
          <input type="text" onChange={handleFilter} />
        </div>
      </form>

      <Product task={tasks} />
    </div>
  );
};
