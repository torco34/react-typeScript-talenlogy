import { useState } from "react";
import { Task } from "./interface/Task";
import { produsts } from "./produsts";
import { Product } from "./Product";
interface Props {
  name: string;
}
export const Pages = ({ name }: Props) => {
  const [task, setFilteredTasks] = useState<Task[]>(produsts);

  function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    const filterText = event.target.value;
    const filtered = task.filter((task) =>
      task.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredTasks(filtered);
  }

  return (
    <div className="text-center">
      <br></br>

      <form action="">
        <div className="container">
          <input type="text" onChange={handleFilter} />
        </div>
      </form>

      <Product task={task} />
    </div>
  );
};
