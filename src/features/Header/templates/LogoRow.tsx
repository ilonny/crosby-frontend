import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/icons/logo.svg";
import styled from 'styled-components';
export const LogoRow = () => {
    return (
        <LogoWrapper>
            <Link to={'/'}>
                <img src={LogoIcon} alt="logo" />
            </Link>
        </LogoWrapper>
    )
}

const LogoWrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 30px;
    text-align: center;
`