import React from 'react';
import styled from 'styled-components';
export const Header = () => {
    return <HeaderStyled>header</HeaderStyled>
}

const HeaderStyled = styled.header`
    height: 200px;
    background: gray;
    display: flex;
    align-items: center;
    justify-content: center;
`