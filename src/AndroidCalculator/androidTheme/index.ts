import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { components } from './components';
import { palette } from './palette';
import { typography } from './typography';

export const androidTheme = responsiveFontSizes(createTheme({
    palette,
    typography,
    components,
}));

export default androidTheme;