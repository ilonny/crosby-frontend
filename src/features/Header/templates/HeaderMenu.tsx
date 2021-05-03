// import styled from 'styled-components';
import { useState, useEffect } from "react";
import { menuCategories } from "../../../lib";
import { HeaderMenuItem, Row } from "../../../ui";
export const HeaderMenu = () => {
    const [categories, setCategories] = useState(menuCategories());
    useEffect(() => {
        function resizeHandler() {
            let arr = menuCategories();
            let resized = false;
            // console.log('resizeHandler', arr)
            if (window.outerWidth < 1210 && !resized) {
                arr = arr.slice(0, 6).concat({
                    id: 111,
                    title: 'Еще',
                    subcategories: arr.slice(6, arr.length)
                })
                resized = true
            } else {
                resized = false;
            }
            setCategories(arr);
        }
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, [categories])
    return (
        <Row align="center" justify="center" flex="1">
            {categories?.map((menuCategory: any) => {
                return <HeaderMenuItem key={menuCategory?.id} item={menuCategory} bold={menuCategory?.bold} />
            })}
            {/* <HeaderMenuItem key={777} item={{ id: 777, title: 'виртуальный тур' }} />
            <HeaderMenuItem key={778} item={{ id: 777, title: 'crosbystudios.com' }} bold={true} /> */}
        </Row>
    )
}

// const HeaderMenuWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `