import {SectionTitle} from '../../../components/SectionTitle.ts';
import {Button} from '../../../components/Button.ts';
import {Container} from '../../../components/Container.ts';
import {S} from './Contact_Styles.ts'
import {type MouseEvent, useRef} from 'react';
import axios from 'axios';

const vercel = 'https://email-sendler.vercel.app/send'
// const host = 'http://localhost:3010/send'
export const Contact = () => {
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const company = useRef<HTMLInputElement>(null);
    const contact = useRef<HTMLInputElement>(null);
    const text = useRef<HTMLTextAreaElement>(null);

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        axios.post(vercel, {
            username: name,
            customMessage: text,
            company,
            contact,
            email
        }).then(() => {
            if(name.current) name.current.value = '';
            if(email.current) email.current.value = '';
            if(company.current) company.current.value = '';
            if(contact.current) contact.current.value = '';
            if(text.current) text.current.value = '';
        })
    }
    return (
        <S.Contact id="contact">
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field ref={name} name={'name'} placeholder={'Name'}/>
                    <S.Field ref={email} name={'email'} placeholder={'email'}/>
                    <S.Field ref={company} name={'company'} placeholder={'company'}/>
                    <S.Field ref={contact} name={'contact'} placeholder={'contact'}/>
                    <S.Field ref={text} placeholder={'message'} as={'textarea'}/>
                    <Button onClick={onClickHandler} type={'submit'}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};

