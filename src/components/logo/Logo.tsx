import Icon from '../icon/Icon.tsx';
import {animateScroll} from 'react-scroll';

export const Logo = () => {
    return (
        <a onClick={()=>{animateScroll.scrollToTop()}}>
            <Icon iconId={'code'}/>
        </a>
    );
};

