import photo from '../../../assets/images/myPhoto.jpg'
import {Container} from '../../../components/Container.ts';
import {FlexWrapper} from '../../../components/FlexWrapper.ts';
import {S} from './Main_Styles.ts'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

const Main = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <S.WrapperText>
                        <S.SmallText>Hi There </S.SmallText>
                        <S.Name>I am <span>Aleksandr Ishutin</span> </S.Name>
                        <S.MainTitle>
                            <p>A Web Developer.</p>
                            <Typewriter options={{
                                strings: ['A Web Developer.',],
                                autoStart: true,
                                loop: true,

                            }}/>
                        </S.MainTitle>
                    </S.WrapperText>
                    <Tilt
                        className="tilt-img"
                        tiltMaxAngleX={35}
                        tiltMaxAngleY={35}
                        perspective={900}
                        scale={1.1}
                        transitionSpeed={2000}
                        gyroscope={true}

                    >
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt=""/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>

    );
};

export default Main;
