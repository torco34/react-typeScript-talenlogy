import { useState } from "react";
import { Task } from "./interface/Task";
import { produsts } from "./produsts";
import { Product } from "./Product";
interface Props {
  name: string;
}
export const Pages = ({ name }: Props) => {
  const [task, setTask] = useState<Task[]>(produsts);
  return (
    <div className="text-center">
      <br></br>
      <form action="">
        <div className="container">
          <input
            type="search"
            placeholder="Search"
            className="form-control me-2"
          />
        </div>
      </form>
      <Product task={task} />
    </div>
  );
};
