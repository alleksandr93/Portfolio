import styled from 'styled-components';
import Icon from '../icon/Icon.tsx';
import {animateScroll} from 'react-scroll';
import {useEffect, useState} from 'react';


export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setShowBtn(true);
            }else{
                setShowBtn(false);
            }
        });
    }, [])
    return (
        <>
            {showBtn && (  <StyledGoTopBtn onClick={() => {
                animateScroll.scrollToTop()
            }}>
                <Icon iconId={'arrowGoTop'} height={15} width={16} viewBox={'0 0 16 15'}/>
            </StyledGoTopBtn>)}
        </>

    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 38px;
    bottom: 38px;
    z-index: 4;
`