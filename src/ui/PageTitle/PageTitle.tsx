import styled from 'styled-components';
import { Media } from "../../lib";
type TProps = {
    children: any;
    align?: 'center' | 'left' | 'right';
    customStyle?: any;
    description?: string

}
export const PageTitle = (props: TProps) => {
    const {
        children,
        customStyle = {},
        description
    } = props
    return (
        <PageTitleStyled {...props} style={{...customStyle}}>
            {children}
            {description && <p>{description}</p>}
        </PageTitleStyled>)
}

const PageTitleStyled = styled.h4<TProps>`
    font-size: 30px;
    text-transform: uppercase;
    font-family: Helvetica Neue, Helvetica;
    font-weight: 400;
    text-align: ${props => props.align ? props.align : 'left'};
    ${Media.mobile} {
        text-align: center;
        font-size: 20px;
        color: #031EE8;
    }
    & p {
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 33px;
        text-align: center;
        letter-spacing: 0.01em;
        color: #808080;
        text-transform: none;
        ${Media.mobile} {
            font-size: 22px;
        }
    }
`