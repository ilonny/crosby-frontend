import { useState } from 'react';
import styled from 'styled-components';

import { Row } from "../../../ui";

import MobileMenuOpenIcon from "../../../assets/icons/mobile-menu-open.svg";
import MobileCartOpenIcon from "../../../assets/icons/mobile-cart-open.svg";
import LogoIcon from "../../../assets/icons/logo.svg";
import MobileSearchIcon from "../../../assets/icons/mobile-search-icon.svg";
import MobileClose from "../../../assets/icons/mobile-close.svg";
import ChevronDown from "../../../assets/icons/chevron-down.svg";

import { menuCategories } from "../../../lib";

const HeaderMenuItem = ({ category }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <MenuRow>
                <span>{category?.title}</span>
                {category?.subcategories && (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            height: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            transform: `rotate(${isOpen ? '180' : '0'}deg)`
                        }}>
                        <img src={ChevronDown} alt="down" />
                    </button>
                )}
            </MenuRow>
            {isOpen && (
                <div style={{paddingBottom: 20}}>
                    {category?.subcategories?.map((subcategory: any) => {
                        return (
                            <MenuRowSub>{subcategory?.title}</MenuRowSub>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export const HeaderMobileTemplate = () => {
    const [
        menuOpened,
        setMenuOpened
    ] = useState<boolean>(true)
    const [categories] = useState(menuCategories())
    return (
        <>
            <div style={{ marginLeft: -20, marginRight: -20, paddingTop: 40, paddingBottom: 30 }}>
                <Row align="center" justify="space-between">
                    <OpenMenuButton onClick={() => setMenuOpened(true)}>
                        <img src={MobileMenuOpenIcon} alt="open menu" />
                    </OpenMenuButton>
                    <Logo src={LogoIcon} alt="logo" />
                    <OpenMenuButton>
                        <img src={MobileCartOpenIcon} alt="open cart" />
                    </OpenMenuButton>
                </Row>
            </div>

            {menuOpened && <WrapperBlur style={{ opacity: menuOpened ? 1 : 0 }} />}
            <ModalContentWrapper style={{ transform: `translateX(${menuOpened ? '0' : '-100%'})` }}>
                <TopRow>
                    <button>
                        <img src={MobileSearchIcon} alt="search" />
                    </button>
                    <button onClick={() => setMenuOpened(false)}>
                        <img src={MobileClose} alt="close" />
                    </button>
                </TopRow>
                {categories?.map((category: any) => {
                    return (
                        <HeaderMenuItem category={category} />
                    )
                })}
                <BottomRow>
                    <LangButton style={{textDecoration: 'underline'}}>RU</LangButton>
                    <LangButton>EN</LangButton>
                </BottomRow>
            </ModalContentWrapper>
        </>
    )
}
const WrapperBlur = styled.div`
    transition: all 250ms ease;
    position: fixed;
    z-index: 5;
    top:0;
    bottom:0;
    left:0;
    right:0;
    backdrop-filter: blur(10px);
    // pointer-events: none;
`
const OpenMenuButton = styled.button`
    padding: 10px 20px;
    background: rgb(245, 245, 245);
    border: none;
`
const Logo = styled.img`
    max-width: 100px;
`

const ModalContentWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
    background: #fff;
    z-index: 5;
    width: 100%;
    transition: all 250ms ease;
    max-width: 286px;
    transform: translateX(-100%);
    & button {
        background: transparent;
        border: none;
    }
`

const TopRow = styled.div`
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MenuRow = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    text-transform: uppercase;
    color: #031EE8;
    font-family: Helvetica Neue;
    font-weight: bold;
    border-top: 1px solid #031EE8;
`

const MenuRowSub = styled.a`
    padding-left: 30px;
    color: #031EE8;
    display: block;
    margin: 5px 0;
    text-transform: uppercase;
`
const BottomRow = styled.div`
    border-top: 1px solid #031EE8;
    padding: 20px;
`
const LangButton = styled.button`
    font-weight: bold;
    color: #031EE8;
    margin-right: 20px;
`