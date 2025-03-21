import Icon from '../../../../components/icon/Icon.tsx';
import styled from 'styled-components';
import {FlexWrapper} from '../../../../components/FlexWrapper.tsx';
import {Theme} from '../../../../styles/Theme.ts';

type Props = {
    title: string
    description: string
    iconId: string
}
export const Skill = ({iconId,title,description}:Props) => {
    return (
        <StyledSkill>
            <FlexWrapper  direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={iconId}/>
                </IconWrapper>

                <SkillTitle>{title}</SkillTitle>
                <SkillText>{description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

export default Skill;
const StyledSkill = styled.div`
    width: 330px;
    padding: 62px 20px 40px;
    flex-grow: 1;
    @media ${Theme.media.mobile} {
        padding: 62px 0 40px;
    }
`
export const IconWrapper =styled.div`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background: #FFFFFF1A;
        transform: rotate(45deg) translate(-50%,-50%);
        position: absolute;
        top: 50%;
        left: 50%;
transform-origin: top left;
    }
`
const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;

`
const SkillText = styled.p`
    text-align: center;
    line-height: 1.4;
`