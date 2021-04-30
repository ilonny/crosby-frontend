import {
    MainLayout,
    Breadcrumbs,
    ItemGallery
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
                </Row>
            </Container>
        </MainLayout>
    )
}