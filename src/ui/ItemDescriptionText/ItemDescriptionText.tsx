import LiBgIcon from "../../assets/icons/li_bg.png";
import styled from 'styled-components';
export const ItemDescriptionText = ({ html }: any) => {
    return (
        <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
    )
}

const Wrapper = styled.div`
    padding: 30px 0;
    padding-left: 16px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #565656;
    & li {
        position: relative;
        list-style-type: none;
    }
    & li:before {
        content: "";
        position: absolute;
        display: block;
        left: -16px;
        top: 11px;
        background: url(${LiBgIcon}) center center no-repeat;
        width: 4px;
        height: 7px;
    }
`