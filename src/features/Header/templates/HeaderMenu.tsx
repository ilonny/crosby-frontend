// import styled from 'styled-components';
import { menuCategories } from "../../../lib";
import { HeaderMenuItem, Row } from "../../../ui";
export const HeaderMenu = () => {
    return (
        <Row align="center" justify="center" flex="1">
            {menuCategories.map((menuCategory: any) => {
                return <HeaderMenuItem key={menuCategory?.id} item={menuCategory} />
            })}
            <HeaderMenuItem key={777} item={{ id: 777, title: 'виртуальный тур' }} />
            <HeaderMenuItem key={778} item={{ id: 777, title: 'crosbystudios.com' }} bold={true} />
        </Row>
    )
}

// const HeaderMenuWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `