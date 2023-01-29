import Pagina1 from "./componentes/paginas/pagina1/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Eu from "./componentes/paginas/sobreMim/eu.js";
import Projetos from "./componentes/paginas/projetos/projetos.js";
import AluraOrgano from "./componentes/trabalhosEstudos/ALURA/AluraOrgano/AluraOragano.js";
import Contato from "./componentes/paginas/contato/contato.js";





function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Pagina1/>} />
        <Route path="/sobreMim" element={<Eu/>} />
        <Route path="/projetos" element={<Projetos/>} />
        <Route path="/contato"  element={<Contato/>}/>

        <Route path="AluraOrgano" element={<AluraOrgano/>} />
        <Route path="*" element={<p>erro 404</p>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
