import styled from 'styled-components';
import {Theme} from '../styles/Theme.ts';
import {font} from '../styles/Common.ts';


export const SectionTitle =styled.h2`
    text-align: center;
    letter-spacing: 5px;
    position: relative;
    margin-bottom: 90px;

    ${font({family: '"Josefin Sans", sans-serif', weight: 600, fontMax: 36, fontMin: 30})}
    &::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${Theme.colors.accent};
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        @media ${Theme.media.mobile} {
            bottom: -24px;
        }
    }
`