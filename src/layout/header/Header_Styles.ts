import styled from 'styled-components';
import {Theme} from '../../styles/Theme.ts';

 const Header = styled.header`
    background-color: ${Theme.colors.prymariBg};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
`
export const S={
    Header,

}