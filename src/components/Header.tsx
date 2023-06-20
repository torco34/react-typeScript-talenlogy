import React from "react";
import { Link } from "react-router-dom";
import { ContainerHeader } from "../assets/styled/Header";
export const Header = () => {
  return (
    <ContainerHeader>
      <div className="container">
        <Link to="/">Inicio</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/tarea">Tabla De Tareas</Link>
        <Link to="/pages">Restaurant</Link>
        <Link to="/map">Map</Link>
        <Link to="/form">Formulario</Link>
      </div>
    </ContainerHeader>
  );
};
