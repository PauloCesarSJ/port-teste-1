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
        <Route path="/" component={<Pagina1/>} />
        <Route path="/sobreMim" component={<Eu/>} />
        <Route path="/projetos" component={<Projetos/>} />
        <Route path="/contato"  component={<Contato/>}/>

        <Route path="AluraOrgano" component={<AluraOrgano/>} />
        <Route path="*" component={<p>erro 404</p>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
