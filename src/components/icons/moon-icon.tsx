import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import {ReactComponent as MoonIconSvg} from '../../assests/icon-moon.svg'

export const MoonIcon = () => {
    return (
        <SvgIcon
            sx={{ height: '30px' }}
            component={MoonIconSvg}
            inheritViewBox
        />
    );
};