import IconsSprite from '../../assets/images/icons-sprite.svg'

type IconProps = {
    iconId: string
    width?: number
    height?: number
    viewBox?: string
}
const Icon = ({iconId, height, viewBox, width}: IconProps) => {
    return (
            <svg width={width||'50'} height={height||'50'} viewBox={viewBox|| '0 0 50 50'} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${IconsSprite}#${iconId}`}/>
            </svg>


    );
};

export default Icon;
