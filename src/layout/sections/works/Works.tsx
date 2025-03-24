import {SectionTitle} from '../../../components/SectionTitle.ts';
import {Work} from './work/Work.tsx';
import social from '../../../assets/images/project.png'
import timer from '../../../assets/images/timer.png'
import {Container} from '../../../components/Container.ts';
import {FlexWrapper} from '../../../components/FlexWrapper.ts';
import {TabMenu} from './tabMenu/TabMenu.tsx';
import {S} from './Works_Styles.ts'
import * as React from 'react';
export type ItemProjectType = {
    title: string
    text: string
    linkImg: string
    linkDemo: string
    linkCode: string
    type:TabsItemsType['status']
}

export type TabsItemsType = {
    title: string
    status: 'all' | 'landing' | 'react' | 'spa'
}
const tabsItems:TabsItemsType[] = [
    {title:'All',status:'all'},
    {title:'landing page',status:'landing'},
    {title:'React',status:'react'},
    {title:'spa',status:'spa'},
]
const workData: ItemProjectType[] = [
    {
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        linkCode: '#',
        linkDemo: '',
        linkImg: social,
        type:'spa'
    },
    {
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        linkCode: '#',
        linkDemo: '',
        linkImg: timer,
        type:'react'
    },
];

export const Works = () => {
    const [filterStatus,setFilterStatus]=React.useState<TabsItemsType['status']>('all');
    const filtredWorks = filterStatus === 'all' ? workData : workData.filter(el=>el.type===filterStatus);
    return (
        <S.Works id={'works'}>
            <Container>
                <SectionTitle>Works</SectionTitle>
                <TabMenu status={filterStatus} tabsItems={tabsItems} onClick={(status)=>setFilterStatus(status)}></TabMenu>
                <FlexWrapper justify="space-between" align={'flex-start'} wrap={'wrap'}>
                    {filtredWorks.map((el,index) => <Work key={index} item={el}/>)}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


