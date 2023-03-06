import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaHome, FaFileAlt, FaUsers, FaTools, FaPlusCircle, FaTh } from 'react-icons/fa';
import logo from '../assets/white-logo.svg';

const Container = styled.div`
  
`;

const Nav = styled.nav`
  background-color: #0d1f42;
  color: #fff;
  height: 100%;
  padding: 20px;
  width: 200px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  li{
    list-style-type: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: #fff;
  margin-left: 0;
  text-decoration: none;
  display: block;
  align-items: center;
  padding: 10px 25px;
  width: 140px;
  right: 36px;
  background-color: #081b3d;
  box-shadow: 9px 7px 11px -6px rgba(0,0,0,0.75);
  border-radius: 5px;
  margin-bottom: 5px;
  &:hover {
    transition: 2.5s;
    background-color: #17284a;
  }
  svg {
    margin-right: 15px;
    height: 20px;
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  h3{
    font-weight: 300;
  }
`

const GlobalStyle = () => {
  return (
    <>
    <Container>
      <Nav>
        <div className="header">
          <Header>
            <h3>Inter Aduaneira</h3>
          </Header>
        </div>
        <div className="nav-links">
          <ul>
            <li><NavLink to="/inicio"><FaHome />Início</NavLink></li>
            <li><NavLink to="/processos"><FaFileAlt />Processos</NavLink></li>
            <li><NavLink to="/consultaprocesso"><FaTh/>Consultar Processo</NavLink></li>
            <li><NavLink to="/tiposprocesso"><FaFileAlt />Tipos de processo</NavLink></li>
            <li><NavLink to="/propostas"><FaFileAlt />Propostas</NavLink></li>
            <li><NavLink to="/usuarios"><FaUsers />Usuários</NavLink></li>
            <li><NavLink to="/ferramentas"><FaTools />Ferramentas</NavLink></li>
            <li><NavLink to="/cadastros"><FaPlusCircle />Cadastros</NavLink></li>
          </ul>
        </div>
      </Nav>
    </Container>
    </>
  );
};

export default GlobalStyle;