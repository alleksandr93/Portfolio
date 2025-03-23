import {S} from './Slider_Styles.ts'
import '../../styles/slider.css'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useState} from 'react';

type SlidePropsType = {
    text:string
    userName:string
}
const Slide = ({userName,text}:SlidePropsType) => {
const [cursor,setCursor] = useState<boolean>(false);
    return (
        <S.Slide style={cursor?{cursor:'grabbing'}:{}} onMouseDown={()=>{setCursor(!cursor)} }>
            <S.Text>{text}</S.Text>
            <S.Name>@{userName}</S.Name>
        </S.Slide>
    )
}
const items = [
    <Slide text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} userName={'ivan ivanow'}/>,
    <Slide text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} userName={'kiril ivanow'}/>,
    <Slide text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} userName={'katiya ivanow'}/>,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
        />
    </S.Slider>
);
