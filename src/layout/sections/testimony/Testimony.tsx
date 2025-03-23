import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.ts';
import Icon from '../../../components/icon/Icon.tsx';
import {S} from '../skills/Skills_Styles.ts';
import {FlexWrapper} from '../../../components/FlexWrapper.ts';
import {Container} from '../../../components/Container.ts';
import {Slider} from '../../../components/slider/Slider.tsx';


export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.IconWrapper>
                        <Icon iconId={'quote'}></Icon>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};
const StyledTestimony = styled.section`
    min-height: 100vh;
    background-color: #d2d2d2;

    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }
`

