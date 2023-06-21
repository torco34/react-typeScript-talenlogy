import { useState } from "react";
import { Task } from "./interface/Task";
import { produsts } from "./produsts";
import { Product } from "./Product";
// import { Formulario} from "./styled/styles";
import { BsSearch } from "react-icons/bs";

export const Pages = () => {
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
      {/* <Formulario> */}
        <form action="">
          <div className="container">
            <input type="text" placeholder="Search" onChange={handleFilter} />
            <span>
              <BsSearch />
            </span>
          </div>
        </form>
      {/* </Formulario> */}
      
        <Product task={tasks} />
      
    </div>
  );
};
