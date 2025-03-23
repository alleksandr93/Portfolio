import styled from 'styled-components';
import {Theme} from '../../styles/Theme.ts';

const Slider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: grab;
`
const Slide = styled.div``
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
        

        & + span {
            margin-left: 5px;
        }

        &.active {
            background-color: ${Theme.colors.accent};
            width: 20px;
        }
    }
`

export const S ={
    Slider,Slide,Text,Name,Pagination
}