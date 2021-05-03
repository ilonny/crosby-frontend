import React from 'react';
import styled from 'styled-components';
import {
    HeaderMenu,
    LogoRow
} from "./templates";
import {
    Row,
    Container,
    HeaderMenuIcon
} from "../../ui";

import SearchIcon from "../../assets/icons/search_icon.svg";
import CartIcon from "../../assets/icons/cart_icon.svg";
import CurrencySIcon from "../../assets/icons/currency_s.svg";
import EnIcon from "../../assets/icons/en.svg";

export const Header = () => {
    return (
        <Container>
            <LogoRow />
            <HeaderStyled>
                <div style={{ flex: 1 }}></div>
                <div style={{ flex: 1, flexShrink: 0 }}>
                    <HeaderMenu />
                </div>
                <Row align="center" justify="flex-end" flex="1" >
                    <HeaderMenuIcon>
                        <img src={SearchIcon} alt="Search" />
                    </HeaderMenuIcon>
                    <HeaderMenuIcon>
                        <img src={CartIcon} alt="Cart" />
                    </HeaderMenuIcon>
                    <HeaderMenuIcon>
                        <img src={CurrencySIcon} alt="Currency" />
                    </HeaderMenuIcon>
                    <HeaderMenuIcon>
                        <img src={EnIcon} alt="Language" />
                    </HeaderMenuIcon>
                </Row>
            </HeaderStyled>
        </Container>
    )
}

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

`