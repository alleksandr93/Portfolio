import styled from 'styled-components';
import {FlexWrapper} from '../FlexWrapper.tsx';
import {Theme} from '../../styles/Theme.ts';


export const Slider = () => {
    return (
        <StyledStider>
            <FlexWrapper>
            <Slide>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                <Name>@ivan ivanow</Name>
            </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={'active'}></span>
                <span></span>
            </Pagination>
        </StyledStider>
    );
};

const StyledStider = styled.div`
    border: 1px solid red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
`
const Text = styled.p``
const Name = styled.span`
    display: inline-block;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 42px;
`
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: #FFFFFF80;
        border-radius: 20px;
        & + span{
            margin-left: 5px;
        }
        
        &:active{
            background-color: ${Theme.colors.accent};
            width: 20px;
        }
    }


`