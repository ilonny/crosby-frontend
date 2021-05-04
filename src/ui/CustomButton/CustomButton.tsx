import styled from 'styled-components';
import { Media } from "../../lib";
type TProps = {
    // price: string | number
    children: any
    paddingType?: 'big' | 'small'
    onClick?: () => void;
    transparent?: boolean;
    big?: boolean;
}
export const CustomButton = (props: TProps) => {
    const {
        children,
    } = props
    return (
        <CustomButtonStyled {...props}>{children}</CustomButtonStyled>
    )
}

const CustomButtonStyled = styled.button<TProps>`
    font-family: Helvetica Neue;
    font-weight: 400;
    font-size: ${props => props?.big ? '35px' : '25px'};
    min-height: 50px;
    border-radius: 50px;
    background: ${props => props?.transparent ? 'rgba(255, 255, 255, 0.67)' : '#031EE8'};
    color: ${props => props?.transparent ? '#031EE8' : '#fff'};
    padding: ${props => (props.paddingType === 'big' || !props.paddingType) ? '15px 128px;' : '15px 64px'};
    &:hover {
        text-decoration: underline;
    }
    ${Media.mobile} {
        padding: 0px 20px;
        width: 100%;
        font-size: ${props => props?.big ? '23px' : '22px'};
    }
`