import styled from 'styled-components';
import {
    CustomButton,
} from "../../ui";
import {
    Media
} from "../../lib";
type TProps = {
    image: any;
    wrapperStyle?: any;
    title?: string;
    description?: string;
    position?: 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom';
    onClick?: () => void;
    buttonTitle?: string;
    center?: boolean
    buttonTransparent?: boolean
    bigButton?: boolean;
}
export const PageBanner = (props: TProps) => {
    const {
        // image,
        wrapperStyle = {},
        title,
        description,
        position = 'left-top',
        onClick,
        buttonTitle,
        buttonTransparent,
        bigButton
    } = props;
    let positionAbs = {}
    let absValue = 70;
    switch (position) {
        case 'left-top':
            positionAbs = {
                left: absValue,
                top: absValue,
            }
            break;
        case 'right-top':
            positionAbs = {
                right: absValue,
                top: absValue,
            }
            break;
        case 'left-bottom':
            positionAbs = {
                left: absValue,
                bottom: absValue,
            }
            break;
        case 'right-bottom':
            positionAbs = {
                right: absValue,
                bottom: absValue,
            }
            break;
    }
    return (
        <Wrapper {...props} style={{ ...wrapperStyle }}>
            {/* PageBanner */}
            <TitleWrapper {...props} style={{ ...positionAbs }}>
                <Title>{title}</Title>
                <Description dangerouslySetInnerHTML={{ __html: description || '' }} />
                {typeof onClick === 'function' && <CustomButton paddingType={bigButton ? 'small' : 'big'} big={bigButton} transparent={buttonTransparent} onClick={onClick}>{buttonTitle}</CustomButton>}
            </TitleWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div<TProps>`
    width: 100%;
    min-height: calc(100vh - 250px);
    background: url(${props => props?.image}) center center no-repeat;
    background-size: cover;
    position: relative;
    font-family: Helvetica Neue;
        ${props => props.center && `
            display: flex;
            align-items: center;
            justify-content: center;        
        `}
`

const TitleWrapper = styled.div<TProps>`
    position: ${props => props.center ? 'static' : 'absolute'};
    ${Media.mobile} {
        position: static;
        padding: 20px;
    }
`

const Title = styled.div`
    color: #031EE8;
    text-transform: uppercase;
    font-size: 55px;
    ${Media.mobile} {
        font-size: 30px;
    }
`

const Description = styled.div`
    font-size: 22px;
    line-height: 25px;
    margin: 25px 0;
    ${Media.mobile} {
        font-size: 18px;
        margin: 15px 0;
}
`