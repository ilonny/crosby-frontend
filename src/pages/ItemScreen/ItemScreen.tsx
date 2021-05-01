import {
    MainLayout,
    Breadcrumbs,
    ItemGallery,
    ItemDescription
} from "../../features";
import {
    Container,
    Row
} from "../../ui";
export const ItemScreen = () => {
    return (
        <MainLayout>
            <Container>
                <Breadcrumbs />
                <Row mediaWrap="mobile">
                    <ItemGallery />
                    <ItemDescription />
                </Row>
            </Container>
        </MainLayout>
    )
}