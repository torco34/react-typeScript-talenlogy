import React from "react";
import { Link } from "react-router-dom";
import { ContainerHeader } from "../assets/styled/Header";
export const Header = () => {
  return (
    <ContainerHeader>
      <div className="container">
        <Link to="/">Inicio</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/ejercicio">Ejercicio ts</Link>
        <Link to="/restauran">Restaurant</Link>
      </div>
    </ContainerHeader>
  );
};
