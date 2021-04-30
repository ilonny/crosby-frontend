import styled from 'styled-components';
type TProps = {
    children: string
    align?: 'center' | 'left' | 'right'
}
export const PageTitle = (props: TProps) => {
    const { children } = props
    return <PageTitleStyled {...props}>{children}</PageTitleStyled>
}

const PageTitleStyled = styled.h4<TProps>`
    font-size: 30px;
    text-transform: uppercase;
    font-family: Helvetica Neue, Helvetica;
    font-weight: 400;
    text-align: ${props => props.align ? props.align : 'left'}
`