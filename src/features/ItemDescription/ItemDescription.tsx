import {
    PageTitle,
    Price,
    CartControls,
    CustomButton,
    ItemDescriptionText
} from "../../ui";
export const ItemDescription = () => {
    const itemTitle = "Двусторонний плед";
    const price = '25 900 руб';
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
        <div style={{ paddingLeft: 50 }}>
            <PageTitle>{itemTitle}</PageTitle>
            <div style={{ marginTop: 26, marginBottom: 26 }}>
                <Price price={price} />
            </div>
            <CartControls />
            <div style={{ height: 60 }} />
            <CustomButton>ADD TO CART</CustomButton>
            <div style={{ height: 20 }} />
            <ItemDescriptionText html={desctiptionHtml} />
        </div>
    )
}