import { Link } from "react-router-dom";
import "../assets/styled/Header.scss"
export const Header = () => {
  return (
    <div className="divContainer">
      <div className="container container-ul">
        <Link to="/">Inicio</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/tarea">Tabla De Tareas</Link>
        <Link to="/pages">Restaurant</Link>
        <Link to="/map">Map</Link>
        <Link to="/form">Formulario</Link>
      </div>
    </div>
  );
};
