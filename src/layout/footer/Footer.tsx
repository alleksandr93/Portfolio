import Icon from '../../components/icon/Icon.tsx';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {S} from './Footer_Styles.ts'
const iconsSocial = ['instagram', 'telegram', 'vk', 'linkedin']

export const Footer = () => {
    return (
        <S.Footer>
            <FlexWrapper direction="column" align={'center'}>
                <S.Name>Aleksandr</S.Name>
                <S.SocialList>
                    {iconsSocial.map((el, i) => (<S.SocialItem key={i}>
                        <S.SocialIconLink>
                            <Icon iconId={el} width={21} height={21} viewBox={'0 0 21 21'}/>
                        </S.SocialIconLink>
                    </S.SocialItem>))}

                </S.SocialList>
                <S.Copyright>© 2025 Aleksandr Ishutin, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

