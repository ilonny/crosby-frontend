import styled from 'styled-components';
const flexValues = ['center', 'space-between', 'flex-start', 'flex-end', 'space-around'] as const;
type TFlexValues = typeof flexValues[number];
type TProps = {
    justify?: TFlexValues,
    align?: TFlexValues,
    wrap?: 'nowrap' | 'wrap',
    children: React.ReactNode | Element
}

export const Row = (props: TProps) => {
    return <RowStyled {...props} />
}

const RowStyled = styled.div<TProps>`
    display: flex;
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'flex-start'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
`