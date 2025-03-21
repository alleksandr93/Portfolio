import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import Icon from '../../../components/icon/Icon.tsx';
import {Slider} from '../../../components/slider/Slider.tsx';
import {IconWrapper} from '../skills/Skill/Skill.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {Container} from '../../../components/Container.tsx';


export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <IconWrapper>
                        <Icon iconId={'quote'}></Icon>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};
const StyledTestimony = styled.section`
    min-height: 100vh;
    background-color: #d2d2d2;

    ${IconWrapper} {
        margin: 40px 0 72px;
    }
`

