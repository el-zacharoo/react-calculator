import { Theme, createTheme, responsiveFontSizes } from '@mui/material/styles';

import { components } from './components';
import { palette } from './palette';
import { typography } from './typography';

export const macTheme: Theme = responsiveFontSizes(createTheme({
    palette,
    typography,
    components,
}));

export default macTheme;