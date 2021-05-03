import styled from 'styled-components';
import {
    MainLayout,
    Breadcrumbs,
    ItemGallery,
    ItemDescription
} from "../../features";
import {
    Container,
    Row,
    PageTitle,
    ItemSlider,
} from "../../ui";
import { alsoItems } from "../../lib";
export const ItemScreen = () => {
    return (
        <MainLayout>
            <Container>
                <Breadcrumbs />
                <Row mediaWrap="mobile">
                    <ItemGallery />
                    <ItemDescription />
                </Row>
                <ItemDivider />
                <PageTitle
                    align="center"
                >С этим товаром также покупают</PageTitle>
                <ItemDivider />
                <ItemSlider items={alsoItems} />
                <ItemDivider />
            </Container>
        </MainLayout>
    )
}
const ItemDivider = styled.div`
height: 40px;
`