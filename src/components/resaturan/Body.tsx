import React, { Children, useState } from "react";
import { Task } from "./interface/Task";
import { ContainerBody } from "./styled/styles";
interface Props {
  task: Task;
}

// type typebutton: 'menu'

interface Button {
  backgroundColor?: string;
  children: string;
  icono: string;
  onClick: () => void;
  sumar: (num1: number, num2: number) => number;
  handlen: () => void;
}

export const Body = ({ task }: Props) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  function showData() {
    setShowInfo(!showInfo);
  }

  function Button({
    backgroundColor = "red",

    onClick,
    children,
  }: Button) {
    return (
      <div>
        <button onClick={onClick} style={{ backgroundColor }}>
          {children}
        </button>
      </div>
    );
  }

  return (
    <>
      <ContainerBody>
        <div className="p-4 border mt-2 ">
          <img src={task.img} alt="foto" />

          <ul className="t-3">
            <li onClick={showData}>{task.name}</li>
          </ul>
        </div>
        <div>
          {showInfo ? (
            <div>
              <img src={task.img} alt="" />
              <h4>{task?.name}</h4>
              <h6>Direcion: {task.direction}</h6>
              <h6>Telefon: {task.telefono}</h6>
            </div>
          ) : null}
        </div>
      </ContainerBody>
    </>
  );
};
