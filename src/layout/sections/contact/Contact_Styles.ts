import {Theme} from '../../../styles/Theme.ts';
import styled from 'styled-components';

const Contact = styled.section``
const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    margin: 0 auto;
    textarea {
        resize: none;
        height: 155px;
    }

`
const Field = styled.input`
    width: 100%;
    background-color: ${Theme.colors.secondaryBg};
    border: 1px solid ${Theme.colors.borderColor};
    padding: 7px 15px;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${Theme.colors.font};
    // задание стилей для placeholder 

    &::placeholder {
        color: ${Theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    &:focus-visible{
        outline: 2px solid ${Theme.colors.borderColor};
    }
    
`
export const S={
    Contact,Form,Field
}