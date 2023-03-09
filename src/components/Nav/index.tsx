import { FaHome, FaFileAlt, FaUsers, FaTools, FaPlusCircle, FaTh } from 'react-icons/fa';
import * as S from "./styles";

const Nav = () => {
  return (
    <>
      <S.Nav>
        <div className="nav-links">
          <ul>
            <li><S.NavLink to="/inicio"><FaHome />Início</S.NavLink></li>
            <li><S.NavLink to="/processos"><FaFileAlt />Processos</S.NavLink>
              <ul className="sub-menu">
                <li><S.NavLink to="/consultaprocesso"><FaTh/>Consultar Processo</S.NavLink></li>
                <li><S.NavLink to="/tiposprocesso"><FaFileAlt />Tipos de processo</S.NavLink></li>
              </ul>
            </li>
            <li><S.NavLink to="/propostas"><FaFileAlt />Propostas</S.NavLink></li>
            <li><S.NavLink to="/usuarios"><FaUsers />Usuários</S.NavLink></li>
            <li><S.NavLink to="/ferramentas"><FaTools />Ferramentas</S.NavLink></li>
            <li><S.NavLink to="/cadastros"><FaPlusCircle />Cadastros</S.NavLink></li>
          </ul>
        </div>
      </S.Nav>
    </>
  );
};

export default Nav;
