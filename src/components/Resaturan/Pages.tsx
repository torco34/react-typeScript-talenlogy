import { useState } from "react";
import { Task } from "./data";
import { produsts } from "./produsts";
interface Props {
  name: string;
}
export const Pages = ({ name }: Props) => {
  const [pruct, setPruct] = useState<Task[]>(produsts);
  return (
    <div className="text-center">
      <form action="">
        <input type="text" />
      </form>
      {pruct.map((produ) => (
        <div>{produ.name}</div>
      ))}
    </div>
  );
};
