import { useState } from "react";
import { Task } from "./interface/Task";

interface Props {
  task: Task;
}
export const Body = ({ task }: Props) => {
  const [showInfo, setShowInfo] = useState<Task | null>(null);

  function showData() {
    if (!showInfo) {
      setShowInfo(task);
    } else {
      setShowInfo(null);
    }
  }
  return (
    <div>
      <ul className="nav-link text-primary">
        <li onClick={showData}>{task.name}</li>
      </ul>
      {showInfo ? (
        <div>
          <h2>{task.name}</h2>
          <p>{task.producto}</p>
          <p>{task.direction}</p>
        </div>
      ) : null}
    </div>
  );
};
