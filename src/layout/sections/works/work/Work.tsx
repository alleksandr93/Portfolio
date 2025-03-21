import type {ItemProjectType} from '../Works.tsx';
import {Link} from '../../../../components/Link.tsx';
import {Button} from '../../../../components/Button.tsx';
import {S} from '../Works_Styles.ts'
type Props = {
    item:ItemProjectType
}
export const Work = ({item}:Props) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={item.linkImg} alt="Картинка проекта"/>
                <Button>view project</Button>
            </S.ImageWrapper>

            <S.Discription>
                <S.Title>{item.title}</S.Title>
                <S.Text>{item.text}</S.Text>
                <Link href={item.linkDemo}>demo</Link>
                <Link href={item.linkCode}>code</Link>
            </S.Discription>

        </S.Work>
    );
};


