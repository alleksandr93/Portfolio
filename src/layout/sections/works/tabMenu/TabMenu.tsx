import styled from 'styled-components';
import {Link} from '../../../../components/Link.tsx';

export const TabMenu = (props: { menuItems: string[] }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => <ListItem key={index}><Link href="">{item}</Link></ListItem>)}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.div`

    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }


`
const ListItem = styled.li`

`
