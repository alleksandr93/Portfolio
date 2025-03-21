import styled from 'styled-components';
import {Theme} from '../../../styles/Theme.ts';

type Props = {
    itemsHeader: string[]
}
export const HeaderMenu = ({itemsHeader}: Props) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {itemsHeader.map(el => <ListItem>
                    <Link href="#">{el}
                        <Mask> <span>{el}</span> </Mask>
                        <Mask> <span>{el}</span> </Mask>
                    </Link>
                </ListItem>)}

            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

    @media ${Theme.media.tablet} {
    display: none;
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