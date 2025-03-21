import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Work} from './work/Work.tsx';
import social from '../../../assets/images/project.png'
import timer from '../../../assets/images/timer.png'
import {Container} from '../../../components/Container.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {TabMenu} from './tabMenu/TabMenu.tsx';
import {S} from './Works_Styles.ts'
export type ItemProjectType = {
    title: string
    text: string
    linkImg: string
    linkDemo: string
    linkCode: string
}

const items = ['All', 'landing page', 'React', 'spa']
const workData: ItemProjectType[] = [
    {
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        linkCode: '#',
        linkDemo: '',
        linkImg: social
    },
    {
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        linkCode: '#',
        linkDemo: '',
        linkImg: timer
    },
];

export const Works = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>Works</SectionTitle>
                <TabMenu menuItems={items}></TabMenu>
                <FlexWrapper justify="space-between" align={'flex-start'} wrap={'wrap'}>
                    {workData.map((el,index) => <Work key={index} item={el}/>)}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


