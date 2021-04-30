import React, { useState } from 'react';
import { BreadcrumbsUI } from "../../ui";
export const Breadcrumbs = () => {
    const [breadcrumbs] = useState<Array<string>>(['Главная', 'текстиль', 'пледы', 'двусторонний плед']);
    return <BreadcrumbsUI breadcrumbs={breadcrumbs} />
}