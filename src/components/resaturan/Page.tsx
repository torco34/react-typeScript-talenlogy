import { Link } from "react-router-dom";

export const Page = () => {
  return (
    <div>
      <ul>
        <Link to="/page">comida rápidas</Link>
        <Link to="/page">Restauran de carnes</Link>
      </ul>
    </div>
  );
};
