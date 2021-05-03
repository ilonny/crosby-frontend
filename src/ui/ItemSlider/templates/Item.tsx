import { FC } from "react"
import styled from 'styled-components';
import { Price } from "../../../ui";
type TProps = {
    item: any
}
export const Item: FC<TProps> = ({ item }) => {
    return (
        <ItemStyledContainer>
            <ItemStyled>
                <ImageWrapper>
                    <img src={item?.image} alt={item?.title} />
                </ImageWrapper>
                <ItemContentWrapper>
                    <ItemTitle>{item?.title}</ItemTitle>
                    <ItemDescription dangerouslySetInnerHTML={{ __html: item?.description }} />
                    <Price price={item?.price} small={true}></Price>
                </ItemContentWrapper>
            </ItemStyled>
        </ItemStyledContainer>
    )
}

const ItemStyledContainer = styled.div`
    width: 100%;
    padding: 0px 10px;
    max-width: 310px;
    margin: auto;
    // min-width: 278px;
`

const ItemStyled = styled.div`
    width: 100%;
    max-width: 290px;
    margin: auto;
    border: 1px solid #031EE8;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    min-height: 465px;
`

const ImageWrapper = styled.div`
    width: 100%;
    // max-height: 300px;
    height: 260px;
    position: relative;
    & img {
        display: block;
        margin: auto;
        width: 100%;
        height: 100%;
    }
`
const ItemContentWrapper = styled.div`
    padding: 20px;
`
const ItemTitle = styled.div`
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    text-transform: uppercase;
`

const ItemDescription = styled.div`
    font-size: 14px;
    color: #565656;
    line-height: 20px;
    margin: 10px 0;
`