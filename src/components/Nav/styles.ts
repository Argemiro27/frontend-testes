import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
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

export const NavLink = styled(Link)`
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
