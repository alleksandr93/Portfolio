import {createGlobalStyle} from 'styled-components';
import {Theme} from './Theme.ts';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Poppins&display=swap');

    html {
        font-size: 10px;
    }

    *,
    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${Theme.colors.font};
        line-height: 1.2;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${Theme.colors.font};
        cursor: pointer;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${Theme.colors.font};
    }

    section {
        padding: 100px 0;
        @media ${Theme.media.mobile} {
            padding: 80px 0;
        }
    }

    section:nth-of-type(odd) {
        background-color: ${Theme.colors.prymariBg};
    }

    section:nth-of-type(even) {
        background-color: ${Theme.colors.secondaryBg};
    }

    h3 {
        font-family: "Josefin Sans", sans-serif;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 1px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
    }
`