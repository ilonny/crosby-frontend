import styled from 'styled-components';
export const HeaderMenuIcon = ({ children }: any) => {
    return (
        <HeaderMenuIconStyled>{children}</HeaderMenuIconStyled>
    )
}

const HeaderMenuIconStyled = styled.div`
    min-width: 14px;
    min-height: 14px;
    max-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 18px;
    & img, & svg {
        width: 100%;
        // height: 100%;
        max-height: 16px;
        display: block;
        
    }
`