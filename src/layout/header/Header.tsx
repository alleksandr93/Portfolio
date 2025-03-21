import {Logo} from '../../components/logo/Logo.tsx';
import {Container} from '../../components/Container.tsx';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu.tsx';
import {MobileMenu} from './headerMenu/mobileMenu/MobileMenu.tsx';
import * as React from 'react';
import {S} from './Header_Styles.ts'
import {useEffect, useState} from 'react';

const itemsHeader = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header: React.FC = () => {
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize)
        return window.removeEventListener('resize', handleWindowResize)
    }, []);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768

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

