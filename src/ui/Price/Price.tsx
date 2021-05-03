import styled from 'styled-components';
import { Media } from "../../lib";
type TProps = {
    price: string | number
    small?: boolean;
}
const numberWithSpaces = (x: any) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}
export const Price = (props: TProps) => {
    const {
        price,
        // small = false,
    } = props
    return <PriceStyled {...props}>{numberWithSpaces(price)} руб.</PriceStyled>
}

const PriceStyled = styled.h4<TProps>`
    font-size: ${props => props.small ? '20px' : '25px'};
    font-family: Helvetica Neue, Helvetica;
    font-weight: 400;
    color: #031EE8;
    ${Media.mobile} {
        font-size: 18px;
        text-align: center;
    }
`