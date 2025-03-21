import Icon from '../../../../components/icon/Icon.tsx';
import {FlexWrapper} from '../../../../components/FlexWrapper.tsx';
import {S} from '../Skills_Styles.ts'
type Props = {
    title: string
    description: string
    iconId: string
}
export const Skill = ({iconId,title,description}:Props) => {
    return (
        <S.Skill>
            <FlexWrapper  direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{title}</S.SkillTitle>
                <S.SkillText>{description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};

export default Skill;
