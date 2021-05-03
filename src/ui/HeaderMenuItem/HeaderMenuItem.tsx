import { FC } from "react";
import styled from "styled-components";
type TProps = {
    item: any,
    bold?: boolean,
}
export const HeaderMenuItem: FC<TProps> = ({ item, bold }) => {
    return (
        <HeaderMenuItemStyledWrapper>
            <HeaderMenuItemStyled item={item} bold={bold}>{item?.title}</HeaderMenuItemStyled>
            {item?.subcategories?.length && (
                <ul>
                    {item?.subcategories?.map((subcategory: any) => {
                        return (
                            <HeaderMenuItemStyled bold={false} item={subcategory}>{subcategory?.title}</HeaderMenuItemStyled>
                        )
                    })}
                </ul>
            )}
        </HeaderMenuItemStyledWrapper>
    )
}

const HeaderMenuItemStyledWrapper = styled.div`
    position: relative;
    & ul {
        display: none;
        position: absolute;
        top: 100%;
        background: rgb(245, 245, 245);
        z-index: 1;
    }
    &:hover {
        & ul {
            display: block;
        }
    }
`

const HeaderMenuItemStyled = styled.a<TProps>`
    white-space: nowrap;
    cursor: pointer;
    text-transform: uppercase;
    padding: 10px 15px;
    font-size: 12px;
    transition: all 250ms ease;
    position: relative;
    display: block;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    color: ${props => props.bold ? '#031EE8' : '#000'};
    &:hover {
        color: #031EE8;
        text-decoration: underline;
    }
`