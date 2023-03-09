
import { ITable } from "../../interfaces/Table.interface";
import * as S from "./styles";

const Table = ({ children }: ITable) => {
    return (
        <>
            <S.Table>
                <S.THead />{children}
                <S.TBody />
            </S.Table>
            
        </>
    );
};

export default Table;

