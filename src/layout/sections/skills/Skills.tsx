import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import Skill from './Skill/Skill.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {Container} from '../../../components/Container.tsx';

const arraySkill = [
    {
        title: 'html5',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        iconId: 'code'
    },
    {
        title: 'css3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        iconId: 'css'
    },
    {
        title: 'React',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        iconId: 'react'
    },
    {
        title: 'typescript',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        iconId: 'typescript'
    },
    {
        title: 'styled components',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        iconId: 'styledComponents'
    },
    {
        title: 'WEB DESIGN',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        iconId: 'figma'
    },

]
const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {arraySkill.map((skill) => <Skill key={skill.iconId} iconId={skill.iconId} description={skill.text} title={skill.title}/>)}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

export default Skills;
const StyledSkills = styled.section``
