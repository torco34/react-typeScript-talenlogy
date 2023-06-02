import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Perfil } from "./pages/Perfil";
import { Header } from "./components/Header";
import { Inicio } from "./pages/Inicio";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        {/* <Route path="/index" element={<Index />}></Route>
        <Route path="/pages" element={<Pages2 />}></Route>
        <Route path="/pages2" element={<Books />}></Route>
        <Route path="/pages3" element={<PagesEjercicio />}></Route>
        <Route path="/pages4" element={<Pages4 />}></Route>
        <Route path="/pages5" element={<Pages5 />}></Route> */}
      </Routes>
    </Router>
  );
};

export default App;
