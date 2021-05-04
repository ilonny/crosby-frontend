import styled from 'styled-components';
import {
    MainLayout,
    // Breadcrumbs,
    // ItemGallery,
    // ItemDescription
} from "../../features";
import {
    Container,
    Row,
    PageTitle,
    ItemSlider,
    PageBanner,
    CustomButton
} from "../../ui";
import { alsoItems, Media } from "../../lib";
import Banner1Image from "../../assets/images/banner1.jpg";
import Banner2Image from "../../assets/images/banner2.jpg";
import Banner3Image from "../../assets/images/banner3.jpg";
import Banner4Image from "../../assets/images/banner4.jpg";
import Banner5Image from "../../assets/images/banner5.jpg";
import Banner6Image from "../../assets/images/banner6.jpg";

import Inst1Image from "../../assets/images/inst1.jpg";
import Inst2Image from "../../assets/images/inst2.jpg";
import Inst3Image from "../../assets/images/inst3.jpg";
import Inst4Image from "../../assets/images/inst4.jpg";
import Inst5Image from "../../assets/images/inst5.jpg";
import Inst6Image from "../../assets/images/inst6.jpg";

import Inst7Image from "../../assets/images/inst7.jpg";
import Inst8Image from "../../assets/images/inst8.jpg";
import Inst9Image from "../../assets/images/inst9.jpg";
import Inst10Image from "../../assets/images/inst10.jpg";
import Inst11Image from "../../assets/images/inst11.jpg";
import Inst12Image from "../../assets/images/inst12.jpg";

const instImages = [Inst1Image, Inst2Image, Inst3Image, Inst4Image, Inst5Image, Inst6Image];
const instImages2 = [Inst7Image, Inst8Image, Inst9Image, Inst10Image, Inst11Image, Inst12Image];

export const HomeScreen = () => {
    return (
        <MainLayout>
            <Container>
                {/* <ItemDivider /> */}
                <PageBanner
                    image={Banner1Image}
                    wrapperStyle={{ marginTop: 30 }}
                />
                <PageBanner
                    image={Banner2Image}
                    wrapperStyle={{ marginTop: 30 }}
                    title={"candles"}
                    description={"Арома свечи в стекле или<br/>керамике ручной работы"}
                    position="left-top"
                    onClick={() => console.log('onclick shop')}
                    buttonTitle="SHOP"
                />
                <ItemSlider items={alsoItems} wrapperStyle={{ padding: '50px 25px' }} />
                <PageBanner
                    image={Banner3Image}
                    wrapperStyle={{ marginTop: 30 }}
                    title={"OTTOMANS"}
                    description={"Арома свечи в стекле или<br/>керамике ручной работы"}
                    position="left-top"
                    onClick={() => console.log('onclick shop')}
                    buttonTitle="SHOP"
                />
                <ItemSlider
                    items={alsoItems}
                    wrapperStyle={{
                        paddingTop: 50,
                        paddingBottom: 30,
                        paddingRight: 25,
                        paddingLeft: 25,
                    }}
                />
                <PageBanner
                    center={true}
                    buttonTransparent={true}
                    image={Banner4Image}
                    wrapperStyle={{ marginTop: 30 }}
                    bigButton={true}
                    onClick={() => console.log('onclick shop')}
                    buttonTitle="ШОУРУМ В МОСКВЕ"
                />
                <ItemSlider items={alsoItems} wrapperStyle={{ padding: '50px 25px', paddingBottom: 50 }} />
                <Row align="center" justify="center">
                    <CustomButton>ВЫБОР ГАРРИ НУРИЕВА</CustomButton>
                </Row>
                <PageBanner
                    center={true}
                    buttonTransparent={true}
                    image={Banner5Image}
                    wrapperStyle={{ marginTop: 50 }}
                    onClick={() => console.log('onclick shop')}
                    bigButton={true}
                    buttonTitle="ВИРТУАЛЬНЫЙ ТУР"
                />
                <PageBanner
                    center={true}
                    // buttonTransparent={true}
                    image={Banner6Image}
                    wrapperStyle={{ marginTop: 50 }}
                    onClick={() => console.log('onclick shop')}
                    bigButton={true}
                    buttonTitle="CROSBYSTUDIOS.COM"
                />
                <InstDivider />
                <PageTitle align="center" description="@crosbystudioshome" customStyle={{ color: "#031EE8" }}>Подписывайся на instagram</PageTitle>
                <InstDivider />
                <Row align="center" justify="flex-start" wrap="wrap">
                    {instImages?.map((image: any) => {
                        return <InstImageStyled key={image} src={image} alt="inst image" />
                    })}
                </Row>
                <InstDivider />
                <PageTitle align="center" description="@crosbystudioshome" customStyle={{ color: "#031EE8" }}>Мир crosby studios</PageTitle>
                <InstDivider />
                <Row align="center" justify="flex-start" wrap="wrap">
                    {instImages2?.map((image: any) => {
                        return <InstImageStyled key={image} src={image} alt="inst image" />
                    })}
                </Row>
            </Container>
        </MainLayout>
    )
}
const InstDivider = styled.div`
    height: 50px;
`
const InstImageStyled = styled.img`
    margin: 5px;
    flex: 1 1 25%;
    max-width: 100%;
    ${Media.mobile} {
        margin: 0;
        margin-bottom: 10px;
        flex: 1 1 100%;
        max-width: 100%;
    }
`
// const ItemDivider = styled.div`
// height: 10px;
// `