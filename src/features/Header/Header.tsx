import React from 'react';
import styled from 'styled-components';
import {
    HeaderMenu,
    LogoRow
} from "./templates";
export const Header = () => {
    return (
        <div>
            <LogoRow />
            <HeaderStyled>
                <div ></div>
                <HeaderMenu />
                <div ></div>
            </HeaderStyled>
        </div>
    )
}

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

`