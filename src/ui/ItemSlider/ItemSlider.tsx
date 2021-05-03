import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-custom.css";
//@ts-ignore
import Slider from "react-slick";
import styled from 'styled-components';
import { Item } from "./templates";
import SliderArrowLeft from "../../assets/icons/slider_icon_left.png";
import SliderArrowRight from "../../assets/icons/slider_icon_right.png";
type TProps = {
    items: Array<any>
}
// const StyledNextArrow = styled.div`
//     position: absolute;
//     left: 0;
//     top: 10px;
// `;
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                // background: "red",
                content: '',
            }}
            onClick={onClick}
        >
            <img src={SliderArrowLeft} alt="slide left" />
        </div>
    );
}

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                // background: "red",
                content: '',
            }}
            onClick={onClick}
        >
            <img src={SliderArrowRight} alt="slide right" />
        </div>
    );
}

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
        {
            breakpoint: 1224,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 730,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const ItemSlider = (props: TProps) => {
    const { items = [] } = props;
    return (
        <div style={{padding: '0px 25px'}}>
            <Slider
                {...settings}
            >
                {items?.map((item: any) => {
                    return <Item key={item?.id} item={item} />
                })}
            </Slider>
        </div>
    )
}

