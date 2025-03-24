import {S} from '../HeaderMenu_Styles.ts'


const items = [
    {title:'Home',href:'home'},
    {title:'Skills',href:'skills'},
    {title:'Works',href:'works'},
    {title:'Testimony',href:'testimony'},
    {title:'Contact',href:'contact'},
]
export const Menu = () => {
    return (
        <ul>
            {items.map((el,index) => <S.MenuItem key={index}>
                <S.NavLink offset={-80} spyThrottle={100} activeClass={'active'} spy smooth to={el.href}>{el.title}
                    <S.Mask> <span>{el.title}</span> </S.Mask>
                    <S.Mask> <span>{el.title}</span> </S.Mask>
                </S.NavLink>
            </S.MenuItem>)}
        </ul>
    );
};

