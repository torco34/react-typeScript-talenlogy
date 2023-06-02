import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/">Inicio</Link>
      <Link to="/perfil">Perfil</Link>
    </div>
  );
};
