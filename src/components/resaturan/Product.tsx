import { Body } from "./Body";
import { Task } from "./interface/Task";

interface Props {
  task: Task[];
}

export const Product = ({ task }: Props) => {
  return (
    <>
      <div>
        {task.map((task) => (
          <div key={task.id}>
            <Body task={task} />
          </div>
        ))}
      </div>
    </>
  );
};
