import {S} from '../HeaderMenu_Styles.ts'
type Props = {
    itemsHeader: string[]
}

export const Menu = ({itemsHeader}:Props) => {
    return (
        <ul>
            {itemsHeader.map((el,index) => <S.MenuItem key={index}>
                <S.Link href="#">{el}
                    <S.Mask> <span>{el}</span> </S.Mask>
                    <S.Mask> <span>{el}</span> </S.Mask>
                </S.Link>
            </S.MenuItem>)}
        </ul>
    );
};

