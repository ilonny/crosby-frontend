import styled from 'styled-components';
import { Media } from "../../lib";
type TProps = {
    // price: string | number
    children: any
    paddingType?: 'big' | 'small'
}
export const CustomButton = (props: TProps) => {
    const { children } = props
    return (
        <CustomButtonStyled {...props}>{children}</CustomButtonStyled>
    )
}

const CustomButtonStyled = styled.button<TProps>`
    font-family: Helvetica Neue;
    font-weight: 400;
    font-size: 16px;
    height: 50px;
    border-radius: 50px;
    background: #031EE8;
    color: #fff;
    padding: ${props => (props.paddingType === 'big' || !props.paddingType) ? '0px 128px;' : '0px 64px'};
    &:hover {
        text-decoration: underline;
    }
    ${Media.mobile} {
        padding: 0px 20px;
        width: 100%;   
    }
`