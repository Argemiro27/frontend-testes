import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { FaPlusCircle } from "react-icons/fa";
import Button from "../../components/Button";
import Content from "../../components/Content";
import { useState } from "react";
import { TipoProcesso } from "../../types/TipoProcesso";
import Table from "../../components/Table";
import { TBody, THead } from "../../components/Table/styles";

const TiposProcesso = () => {
  const [table] = useState<TipoProcesso[]>([
    {
      id: 1,
      departamento: "Exportação",
      descricao: "Aeronave GOL",
      prefixo: "E",
      sufixo: "AER",
      exemplo: "22E000001AER",
    },
    {
      id: 2,
      departamento: "Exportação",
      descricao: "AMB",
      prefixo: "E",
      sufixo: "AMB",
      exemplo: "22E000001AMB",
    },
  ]);
  return (
    <>
      <Nav />
      <Header />
      <Content>
        <br />
        <Button>
          <FaPlusCircle />
          ADICIONAR NOVO TIPO DE PROCESSO
        </Button>
        <br />
        <Table>
          <THead>
            <tr>
              <th>DEPARTAMENTO</th>
              <th>DESCRIÇÃO</th>
              <th>PREFIXO</th>
              <th>SUFIXO</th>
              <th>EXEMPLO</th>
            </tr>
          </THead>
          <TBody>
            {table.map((tipoProcesso) => (
              <tr key={tipoProcesso.id}>
                <td>{tipoProcesso.departamento}</td>
                <td>{tipoProcesso.descricao}</td>
                <td>{tipoProcesso.prefixo}</td>
                <td>{tipoProcesso.sufixo}</td>
                <td>{tipoProcesso.exemplo}</td>
              </tr>
            ))}
          </TBody>
        </Table>
      </Content>
    </>
  );
};

export default TiposProcesso;
