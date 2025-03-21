import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo.tsx';
import {Container} from '../../components/Container.tsx';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {Theme} from '../../styles/Theme.ts';
import {HeaderMenu} from './headerMenu/HeaderMenu.tsx';
import {MobileMenu} from './mobileMenu/MobileMenu.tsx';

const itemsHeader = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    <HeaderMenu itemsHeader={itemsHeader} />
                    <MobileMenu itemsHeader={itemsHeader} />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${Theme.colors.prymariBg};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
`