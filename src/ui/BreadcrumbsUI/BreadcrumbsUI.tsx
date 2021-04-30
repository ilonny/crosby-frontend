import styled from 'styled-components';
import { Row } from "../../ui";
type TPops = {
    breadcrumbs: Array<string>
}
export const BreadcrumbsUI = (props: TPops) => {
    const { breadcrumbs } = props
    return (
        <Row align='center'>
            <BreadcrumbsStyled>
                {breadcrumbs.join(' - ')}
            </BreadcrumbsStyled>
        </Row>
    )
}

const BreadcrumbsStyled = styled.p`
    margin: 30px 0;
    color: #949494;
`