import { Body } from "./Body";
import { Task } from "./interface/Task";
interface Props {
  task: Task[];
}

export const Product = ({ task }: Props) => {
  return (
    <div>
      {/* con filter
        tipo de comida 
        ubicación
        Lista de restaurante
        informacion de restaurante
        HACER
        buscar por producto
        mostrar lista de restaurante
        y la lista con todo los datos
        .
         */}
      {task.map((task) => (
        <div>
          <Body task={task} />
        </div>
      ))}
    </div>
  );
};
