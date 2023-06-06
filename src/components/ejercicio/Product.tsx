import { Card } from "./Card";
import { Task } from "./interfaces/Task";

interface Props {
  tasks: Task[];
}

export const Product = ({ tasks }: Props) => {
  return (
    <>
      <div className="bg-info">
        {tasks.map((task) => (
          <div>
            <Card task={task} />
          </div>
        ))}
      </div>
    </>
  );
};
