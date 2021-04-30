import styled from 'styled-components';
type TProps = {
    price: string | number
}
export const Price = (props: TProps) => {
    const { price } = props
    return <PriceStyled {...props}>{price}</PriceStyled>
}

const PriceStyled = styled.h4<TProps>`
    font-size: 25px;
    font-family: Helvetica Neue, Helvetica;
    font-weight: 400;
    color: #031EE8;
`