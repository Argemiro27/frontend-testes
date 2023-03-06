import styled from "styled-components";
import GlobalStyle from "../../styled/GlobalStyle";
import { FaPlusCircle } from 'react-icons/fa';

const Content = styled.div`
  position: relative;
  align-items: right;
  background-color: #f2f2f2;
  width: 78%;
  height: 82vh;
  padding: 20px;
  left: 35vh;
  top: 10vh;
  border: 1px solid gray;
  border-radius: 5px;

`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #17284a;
  color: #bababa;
  border: none;
  cursor: pointer;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`;

const TiposProcesso = () => {
    return(
        <>
        <GlobalStyle/>
        <Content>
            <br/>
            <Button><FaPlusCircle/>ADICIONAR NOVO TIPO DE PROCESSO</Button>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>DEPARTAMENTO</th>
                        <th>DESCRIÇÃO</th>
                        <th>PREFIXO</th>
                        <th>SUFIXO</th>
                        <th>EXEMPLO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
            </table>
        </Content>
        </>
    );
};

export default TiposProcesso;