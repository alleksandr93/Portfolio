import {SectionTitle} from '../../../components/SectionTitle.ts';
import {Button} from '../../../components/Button.ts';
import {Container} from '../../../components/Container.ts';
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
