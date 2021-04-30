import styled from 'styled-components';
type TProps = {
    // price: string | number
}
export const CartControls = (props: TProps) => {
    // const { price } = props
    return (
        <CartControlsStyled {...props}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
        </CartControlsStyled>
    )
}

const CartControlsStyled = styled.h4<TProps>`
    display: flex;
    align-items: center;
    & button {
        width: 37px;
        height: 47px;
        border: 1px solid #031EE8;
        background: transparent;
        transition: all 250ms ease;
        &:hover {
            color: #fff;
            background: #031EE8;
        }
    }
    & span {
        padding: 0px 10px;
        min-width: 77px;
        font-weight: 400;
        text-align: center;
        border-top: 1px solid #031EE8;
        border-bottom: 1px solid #031EE8;
        height: 47px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`