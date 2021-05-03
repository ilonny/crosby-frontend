import styled from 'styled-components';
import {
    Media,
} from "../../lib";
import {
    PageTitle,
    Price,
    CartControls,
    CustomButton,
    ItemDescriptionText
} from "../../ui";
export const ItemDescription = () => {
    const itemTitle = "Двусторонний плед";
    const price = '25900';
    const desctiptionHtml = `
        <ul>
            <li>Нашивка с логотипом </li>
            <li>Сплошной серый с одной стороны, неоново-зеленый с другой </li>
            <li>Детали окантовки в тон </li>
            <li>Предпочтительна ручная стирка, деликатная стирка, 30°C без отжима</li>
        </ul>
        <br/>
        <p>Доступно только для самовывоза</p>
    `;
    return (
        <MainWrapper >
            <PageTitle>{itemTitle}</PageTitle>
            <PriceWrapper>
                <Price price={price} />
            </PriceWrapper>
            <CartControls />
            <DividerFirst />
            <CustomButton>ADD TO CART</CustomButton>
            <DividerSecond />
            <ItemDescriptionText html={desctiptionHtml} />
        </MainWrapper>
    )
}
const MainWrapper = styled.div`
    padding-left: 50px;
    ${Media.mobile} {
        padding-left: 0px;
        margin-top: 30px;
        width: 100%;
    }
`

const PriceWrapper = styled.div`
    margin-top: 26px;
    margin-bottom: 26px;
    ${Media.mobile} {
        margin-top: 13px;
        margin-bottom: 26px;
    }
`
const DividerFirst = styled.div`
    height: 60px;
    ${Media.mobile} {
        height: 30px;
    }
`
const DividerSecond = styled.div`
    height: 20px;
    ${Media.mobile} {
        height: 0px;
    }
`