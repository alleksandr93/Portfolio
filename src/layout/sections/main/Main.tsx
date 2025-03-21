import photo from '../../../assets/images/myPhoto.jpg'
import {Container} from '../../../components/Container.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {S} from './Main_Styles.ts'

const Main = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <S.WrapperText>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Aleksandr Ishutin</span> </S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </S.WrapperText>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>

    );
};

export default Main;
