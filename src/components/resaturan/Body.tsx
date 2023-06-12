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
        <ul className="nav-link text-primary">
          <img src={task.img} alt="foto" />
          <li onClick={showData}>{task.name}</li>
        </ul>
        {showInfo ? (
          <div>
            <img src={task.img} alt="" />
            <h2>{task?.name}</h2>
            <h2>{task.direction}</h2>
          </div>
        ) : null}
      </ContainerBody>
    </>
  );
};
