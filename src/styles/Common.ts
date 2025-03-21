import {Theme} from './Theme.ts';

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    fontMin?: number
    fontMax?: number
}
export const font = ({color, family, lineHeight, weight, fontMax, fontMin}: FontPropsType) => `
font-family: ${family || 'Poppins'};
font-weight: ${weight || 400};
color: ${color || Theme.colors.font};
line-height: ${lineHeight || 1.2};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${fontMax} - ${fontMin}) + ${fontMin}px);
`