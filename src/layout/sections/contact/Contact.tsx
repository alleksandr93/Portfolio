import {SectionTitle} from '../../../components/SectionTitle.ts';
import {Button} from '../../../components/Button.ts';
import {Container} from '../../../components/Container.ts';
import {S} from './Contact_Styles.ts'
import {type MouseEvent, useState} from 'react';
import axios from 'axios';

const vercel ='https://email-sendler.vercel.app/send'
// const host = 'http://localhost:3010/send'
export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [contact, setContact] = useState('');
    const [text, setText] = useState('');
    const onClickHandler =  (e: MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault();
      axios.post(vercel, {
            username: name,
            customMessage: text,
            company,
            contact,
            email
        }).then(res=>{
          console.log('Got contact');
          setName('')
          setEmail('')
          setCompany('')
          setContact('')
          setText('')
      })
    }
    return (
        <S.Contact id="contact">
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field value={name} name={'name'} placeholder={'Name'}
                             onChange={(e) => setName(e.currentTarget.value)}/>
                    <S.Field value={email} name={'email'} placeholder={'email'}
                             onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <S.Field value={company} name={'company'} placeholder={'company'}
                             onChange={(e) => setCompany(e.currentTarget.value)}/>
                    <S.Field value={contact} name={'contact'} placeholder={'contact'}
                             onChange={(e) => setContact(e.currentTarget.value)}/>
                    <S.Field value={text} placeholder={'message'} as={'textarea'}
                             onChange={(e) => setText(e.currentTarget.value)}/>
                    <Button onClick={onClickHandler} type={'submit'}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};

