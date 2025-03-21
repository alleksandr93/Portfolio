import styled from 'styled-components';
import type {ItemProjectType} from '../Works.tsx';
import {Link} from '../../../../components/Link.tsx';
import {Theme} from '../../../../styles/Theme.ts';
import {Button} from '../../../../components/Button.tsx';

type Props = {
    item:ItemProjectType
}
export const Work = ({item}:Props) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={item.linkImg} alt="Картинка проекта"/>
                <Button>view project</Button>
            </ImageWrapper>

            <Discription>
                <Title>{item.title}</Title>
                <Text>{item.text}</Text>
                <Link href={item.linkDemo}>demo</Link>
                <Link href={item.linkCode}>code</Link>
            </Discription>

        </StyledWork>
    );
};

const StyledWork=styled.div`
    background-color: ${Theme.colors.secondaryBg};
    max-width: 540px;
    width: 330px;
    flex-grow: 1;
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
        transform: translate(-50%, -50%);
        opacity: 0;
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
        backdrop-filter: blur(8px);
        opacity:0;
    }

    &:hover {
        &::before {
        opacity: 1;
        }
        ${Button} {
            opacity: 1;
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
