import styled from 'styled-components';
export const HeaderMenuIcon = ({ children }: any) => {
    return (
        <HeaderMenuIconStyled>{children}</HeaderMenuIconStyled>
    )
}

const HeaderMenuIconStyled = styled.div`
    // width: 14px;
    // height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 18px;
    & img, & svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`