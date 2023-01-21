import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import {ReactComponent as SunIconSvg} from '../../assests/icon-sun.svg'

export const SunIcon = () => {
    return (
        <SvgIcon
            component={SunIconSvg}
            inheritViewBox
        />
    );
};