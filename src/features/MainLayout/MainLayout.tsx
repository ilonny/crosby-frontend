import { ReactNode } from 'react';
// import styled from 'styled-components';
import { Header, Footer } from "../../features";

type TPops = {
    children: ReactNode
}

export const MainLayout = (props: TPops) => {
    const { children } = props
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}