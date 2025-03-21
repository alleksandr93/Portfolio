import styled from 'styled-components';
import Icon from '../../components/icon/Icon.tsx';
import {Theme} from '../../styles/Theme.ts';

const iconsSocial = ['instagram', 'telegram', 'vk', 'linkedin']

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper>
            <Name>Aleksandr</Name>
            <SocialList>
                {iconsSocial.map((el, i) => (<SocialItem key={i}>
                    <SocialIconLink>
                        <Icon iconId={el} width={21} height={21} viewBox={'0 0 21 21'}/>
                    </SocialIconLink>
                </SocialItem>))}

            </SocialList>
            <Copyright>© 2023 Aleksandr Ishutin, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.prymariBg};
    padding: 40px 0 ;
`
const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 3px;



`
const SocialList = styled.ul`
    display: flex;
    gap: 2rem;
    margin: 30px 0;
`
const SocialItem = styled.li``
const SocialIconLink = styled.a`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    color: ${Theme.colors.accent};
    &:hover {
        color: ${Theme.colors.prymariBg};
        background-color: ${Theme.colors.accent};
        transform: translateY(-4px);
        
    }
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    opacity: 0.5;;

`