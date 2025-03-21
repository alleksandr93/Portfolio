import styled from 'styled-components';
import {Theme} from '../../../styles/Theme.ts';
import {font} from '../../../styles/Common.ts';

const Main = styled.section`
    min-height: 100vh;
    display: flex;
`
const WrapperText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 10px 0 0 0;
`
const SmallText = styled.p`
    font-size: 14px;
    font-weight: 400;
`
const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, fontMax: 50, fontMin: 36})}
    margin: 10px 0;
    letter-spacing: 0.05em;
    text-align: start   ;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            position: absolute;
            bottom: 0;
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${Theme.colors.accent};
            z-index: -1;
            
        }
    }

    @media ${Theme.media.mobile} {
        margin: 15px 0 22px ;
    }
`
const MainTitle = styled.h1`
    ${font({fontMax:27,fontMin:20,weight:400})}
  
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    object-position: 78%;
    border-radius: 5px;
    margin-right: 15px;
    @media ${Theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`
const PhotoWrapper = styled.div`
position: relative;
    z-index: 0;

    &::before{
        position: absolute;
        top: -24px;
        left: 29px;
        
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${Theme.colors.accent};
        z-index: -1;
        @media ${Theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }
    }
    @media ${Theme.media.mobile} {
        margin-top: 65px;
    }
`
export const S={
    Main,PhotoWrapper,Photo,MainTitle,Name,SmallText,WrapperText
}