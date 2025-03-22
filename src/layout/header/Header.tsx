import {Logo} from '../../components/logo/Logo.tsx';
import {Container} from '../../components/Container.ts';
import {FlexWrapper} from '../../components/FlexWrapper.ts';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu.tsx';
import {MobileMenu} from './headerMenu/mobileMenu/MobileMenu.tsx';
import {useEffect, useState} from 'react';
import {S} from './Header_Styles.ts'

const itemsHeader = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize)
        return window.removeEventListener('resize', handleWindowResize)
    }, []);
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    {width<breakpoint ? <MobileMenu itemsHeader={itemsHeader}/> :<DesktopMenu itemsHeader={itemsHeader}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

