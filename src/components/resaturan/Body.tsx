import React, { Children, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Task } from "./interface/Task";
// import { ContainerBody } from "./styled/styles";
import { Link } from "react-router-dom";
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
      <Container>
        <Row>
          <Col>
            {/* <ContainerBody> */}
            <div className="p-4  mt-2 ">
              <img src={task.img} alt="foto" />

              <ul className="t-3">
                <li className="nav-link" onClick={showData}>
                  {task.name}
                </li>
              </ul>
            </div>
            {/* </ContainerBody> */}
          </Col>
          <Col>
            {/* <ContainerBody> */}
            <div>
              {showInfo ? (
                <div className="p-4 border">
                  <img src={task.img} alt="" />
                  <h4>{task?.name}</h4>
                  <h5>Producto: {task.producto}</h5>
                  <h6>Direcion: {task.direction}</h6>
                  <h6>Telefon: {task.telefono}</h6>

                  <Link to="">web {task.web}</Link>
                </div>
              ) : null}
            </div>
            {/* </ContainerBody> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
