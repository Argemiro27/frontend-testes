import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { FaPlusCircle } from 'react-icons/fa';
import Button from "../../components/Button";
import Content from "../../components/Content";


const TiposProcesso = () => {
    return(
        <>
        <Nav/>
        <Header/>
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