import styled from 'styled-components';
import {Link} from '../../../../components/Link.ts';
import type {TabsItemsType} from '../Works.tsx';

type Props = {
    onClick:(status:TabsItemsType['status'])=>void
    tabsItems: TabsItemsType[]
    status:TabsItemsType['status']
}

export const TabMenu = ({tabsItems,onClick,status}:Props) => {
    return (
        <StyledTabMenu>
            <ul>
                {tabsItems.map((item, index) => <ListItem  key={index}><Link active={item.status===status}  as={'button'}  onClick={()=>onClick(item.status)}>{item.title}</Link></ListItem>)}
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
