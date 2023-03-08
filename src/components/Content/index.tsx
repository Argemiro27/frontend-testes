import { IContent } from "../../interfaces/Content.interface";
import * as S from "./styles";

const Content = ({ children }: IContent) => {
    return <S.Content>{children}</S.Content>;
};

export default Content;