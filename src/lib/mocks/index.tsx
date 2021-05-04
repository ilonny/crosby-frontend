import Item1 from "../../assets/images/item1.png";
import Item2 from "../../assets/images/item2.png";
import Item3 from "../../assets/images/item3.png";
import Item4 from "../../assets/images/item4.png";
export const alsoItems = [
    {
        id: 1,
        title: 'Ковер носок',
        description: 'Материал: 50% шерсть, 50% акрил<br>Ручной тафтинг<br>Размер: 70х60см',
        price: '29600',
        image: Item1,
    },
    {
        id: 2,
        title: 'Стакан синий градиент',
        description: 'Материал: стекло<br>Размер: 10х10см',
        price: '2590',
        image: Item2,
    },
    {
        id: 3,
        title: 'Ковер носок',
        description: 'Материал: 50% шерсть, 50% акрил<br>Ручной тафтинг<br>Размер: 70х60см',
        price: '29600',
        image: Item3,
    },
    {
        id: 4,
        title: 'Подушка Hand зеленая',
        description: 'Материал: 100% искусственный мех<br>Размер: 57х40х15см',
        price: 18500,
        image: Item4,
    },
    {
        id: 5,
        title: 'Item for Scroll slider',
        description: 'Материал: 100% искусственный мех<br>Размер: 57х40х15см',
        price: 12500,
        image: Item2,
    },
];

export const menuCategories = () => {
    let arr = [
        {
            id: 1,
            title: 'ВСЕ ТОВАРЫ',
        },
        // {
        //     id: 2,
        //     title: 'свечи',
        // },
        // {
        //     id: 3,
        //     title: 'текстиль',
        //     subcategories: [
        //         {
        //             id: 4,
        //             title: 'Пледы',
        //         },
        //         {
        //             id: 5,
        //             title: 'Подушки',
        //         },
        //         {
        //             id: 6,
        //             title: 'Ковры',
        //         },
        //     ]
        // },
        // {
        //     id: 7,
        //     title: 'посуда',
        // },
        // {
        //     id: 8,
        //     title: 'Аксессуары',
        // },
        // {
        //     id: 9,
        //     title: 'Одежда',
        // },
        // {
        //     id: 10,
        //     title: 'Мебель',
        // },
        {
            id: 14,
            title: 'Эсклюзивная мебель',
        },
        {
            id: 11,
            title: 'Шоурум',
        },
        {
            id: 12,
            title: 'Виртуальный тур',
        },
        {
            id: 13,
            title: 'crosbystudios.com',
            bold: true,
        },
    ];
    return arr;
};