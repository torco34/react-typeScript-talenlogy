import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Perfil } from "./pages/Perfil";
import { Inicio } from "./pages/Inicio";
import { Pages } from "./components/resaturan/Pages";
import { PagesTarea } from "./components/tablaTareas/PagesTarea";
import { Map } from "./components/Map/Map";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/tarea" element={<PagesTarea />} />
        <Route path="/map" element={<Map />} />
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
