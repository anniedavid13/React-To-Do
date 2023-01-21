import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import {ReactComponent as CrossIconSvg} from '../../assests/icon-cross.svg'

export const CrossIcon = () => {
    return (
        <SvgIcon
            component={CrossIconSvg}
            inheritViewBox
        />
    );
};