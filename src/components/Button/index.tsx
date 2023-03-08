import { IButton } from "../../interfaces/Button.interface";
import * as S from "./styles";

const Button = ({ onClick, children }: IButton) => {
    return <S.Button onClick={onClick}>{children}</S.Button>;
};

export default Button;