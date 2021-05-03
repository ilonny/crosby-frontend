import { Media } from "../../lib";
import styled from 'styled-components';
const flexValues = ['center', 'space-between', 'flex-start', 'flex-end', 'space-around'] as const;
type TFlexValues = typeof flexValues[number];
type TProps = {
    justify?: TFlexValues,
    align?: TFlexValues,
    wrap?: 'nowrap' | 'wrap',
    children: React.ReactNode | Element,
    mediaWrap?: keyof typeof Media,
    flex?: any
}

export const Row = (props: TProps) => {
    return <RowStyled {...props} />
}

const RowStyled = styled.div<TProps>`
    display: flex;
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'flex-start'};
    flex-wrap: ${props => {
        if (props.wrap) {
            return props.wrap
        }
        return 'nowrap';
    }};
    ${props => {
        if (props.mediaWrap) {
            return `
                ${Media[props.mediaWrap]} {
                    flex-wrap: wrap;
                }
            `
        }
    }}
    ${props => {
        if (props.flex) {
            return `flex: ${props.flex}`
        }
    }}

`