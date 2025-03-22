import {Menu} from '../menu/Menu.tsx';
import {S} from '../HeaderMenu_Styles.ts'
import * as React from 'react';
type Props = {
    itemsHeader: string[]
}
export const MobileMenu = ({itemsHeader}: Props) => {
    const [menuIsOpen, setMenuIsOpen] = React.useState<boolean>(false)
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <Menu itemsHeader={itemsHeader}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};




