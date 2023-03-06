import React from "react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Inicio from "./pages/LoggedIn/Inicio";
import Processos from "./pages/LoggedIn/Processos";
import ConsultaProcesso from "./pages/LoggedIn/ConsultaProcesso";
import TiposProcesso from "./pages/LoggedIn/TiposProcesso";
import Propostas from "./pages/LoggedIn/Propostas";
import Usuarios from "./pages/LoggedIn/Usuarios";
import Ferramentas from "./pages/LoggedIn/Ferramentas";
import Cadastros from "./pages/LoggedIn/Cadastros";

const MyRoutes = () => {
   return(
     <Router>
       <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/inicio" element={<Inicio />} />
       <Route path="/processos" element={<Processos />} />
       <Route path="/consultaprocesso" element={<ConsultaProcesso />} />
       <Route path="/tiposprocesso" element={<TiposProcesso />} />
       <Route path="/propostas" element={<Propostas />} />
       <Route path="/usuarios" element={<Usuarios />} />
       <Route path="/ferramentas" element={<Ferramentas />} />
       <Route path="/cadastros" element={<Cadastros />} />
       </Routes>
     </Router>
   )
}

export default MyRoutes;