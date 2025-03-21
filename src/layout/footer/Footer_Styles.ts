import styled from 'styled-components';
import {font} from '../../styles/Common.ts';
import {Theme} from '../../styles/Theme.ts';

const Footer = styled.footer`
    background-color: ${Theme.colors.prymariBg};
    padding: 40px 0;
`
const Name = styled.span`
    ${font({family:'"Josefin Sans", sans-serif',weight:700,fontMax:22,fontMin:16})}
    letter-spacing: 3px;

`
const SocialList = styled.ul`
    display: flex;
    gap: 2rem;
    margin: 30px 0;
`
const SocialItem = styled.li``
const SocialIconLink = styled.a`
    display: flex;
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
export const S ={
    Footer,Name,SocialList,SocialItem,SocialIconLink,Copyright
}