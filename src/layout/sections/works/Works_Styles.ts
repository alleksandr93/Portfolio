import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper.ts';
import {Theme} from '../../../styles/Theme.ts';
import {Link} from '../../../components/Link.ts';
import {Button} from '../../../components/Button.ts';


const Works = styled.section`
    position: relative;
    ${FlexWrapper} {
        gap: 30px;
    }
`
const Work=styled.div`
    background-color: ${Theme.colors.secondaryBg};
    max-width: 540px;
 
    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

    @media ${Theme.media.desktop} {
       
    }
`
const ImageWrapper = styled.div`
    position: relative;
    
    ${Button} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        opacity: 0;
        transition: ${Theme.animations.transition};
        &:before{
            width: 100%;
            height: 100%;
        }
    }
    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #0000004D;
        backdrop-filter: blur(2px);
        opacity:0;
        transition: ${Theme.animations.transition};
    }

    &:hover {
        &::before {
        opacity: 1;
        }
        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    @media ${Theme.media.tablet} {
        &::before {
            opacity: 1;
        }
        ${Button} {
            opacity: 1;
        }
    }

`
const Image=styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Discription = styled.div`
padding: 25px 20px;

`
const Title=styled.h3``
const Text=styled.p`

    margin: 14px 0 10px;
`
export const S ={
    Works,Work,ImageWrapper,Image,Discription,Title,Text
}