import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Button} from '../../../components/Button.tsx';
import {Container} from '../../../components/Container.tsx';
import {S} from './Contact_Styles.ts'

export const Contact = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field name={'name'} placeholder={'Name'}/>
                    <S.Field name={'lastName'} placeholder={'Subject'}/>
                    <S.Field  placeholder={'message'} as={'textarea'}/>
                    <Button type={'submit'}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};
