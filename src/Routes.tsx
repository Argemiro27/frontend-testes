import React from "react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Login, Register, Inicio, Processos, ConsultaProcesso, TiposProcesso, Propostas, Usuarios, Ferramentas, Cadastros} from "./pages";


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