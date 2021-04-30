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
                <Row>
                    <ItemGallery />
                    <ItemDescription />
                </Row>
            </Container>
        </MainLayout>
    )
}