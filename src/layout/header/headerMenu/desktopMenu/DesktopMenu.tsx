import {Menu} from '../menu/Menu.tsx';
import {S} from '../HeaderMenu_Styles.ts'

type Props = {
    itemsHeader: string[]
}
export const DesktopMenu = ({itemsHeader}: Props) => {
    return (
        <S.DesktopMenu>
            <Menu itemsHeader={itemsHeader}></Menu>
        </S.DesktopMenu>
    );
};

