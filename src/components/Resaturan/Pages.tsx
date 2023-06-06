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
      <form action="">
        <input type="text" />
      </form>
      <Product task={task} />
    </div>
  );
};
