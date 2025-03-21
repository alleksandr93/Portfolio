import {useState} from 'react';
import {Menu} from '../menu/Menu.tsx';
import {S} from '../HeaderMenu_Styles.ts'
type Props = {
    itemsHeader: string[]
}
export const MobileMenu = ({itemsHeader}: Props) => {
    const [state, setState] = useState<boolean>(false)
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={state} onClick={() => setState(!state)}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={state}>
                <Menu itemsHeader={itemsHeader}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};




