import styled, {css} from 'styled-components';
import {Theme} from '../../../styles/Theme.ts';
import {useState} from 'react';

type Props = {
    itemsHeader: string[]
}
export const MobileMenu = ({itemsHeader}: Props) => {
    const [state, setState] = useState<boolean>(false)
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={state} onClick={() => setState(!state)}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={state}>
                <ul>
                    {itemsHeader.map(el => <ListItem>
                        <Link href="#">{el}
                            <Mask> <span>{el}</span> </Mask>
                            <Mask> <span>{el}</span> </Mask>
                        </Link>
                    </ListItem>)}

                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${Theme.media.tablet} {
        display: block;
    }
`
const MobileMenuPopup = styled.div<{isOpen:boolean}>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;
    
    ${props => props.isOpen && css<{isOpen:boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;



    `}
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

`
const BurgerButton = styled.button<{isOpen:boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 4;
  
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;
        
        ${props => props.isOpen && css<{isOpen:boolean}>`
            background-color: rgba(255, 255, 255, 0);
            
        `}
        
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(-10px);
            
            ${props => props.isOpen && css<{isOpen:boolean}>`
            transform: rotate(-45deg) translateY(0);
            
        `}
        }
        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Theme.colors.font};
            position: absolute;
            transform: translateY(10px);
            
            ${props => props.isOpen && css<{isOpen:boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            
        `}
        }
    }

`
const Link = styled.a`
    font-family: "Josefin Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;
    line-height: 55px;
    text-align: center;
color: transparent;
`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    overflow: hidden;
    color: ${Theme.colors.accent};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const ListItem = styled.li`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${Theme.colors.accent};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }
   
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${Theme.colors.font};
        }

        ${Mask} + ${Mask} {
            transform: skewX(12deg) translateX(-5px);
        }
    }
`