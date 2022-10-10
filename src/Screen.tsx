import * as React from 'react';

import Box from '@mui/material/Box';

export const Screen = ({ value }: any) => {

    return (
        <Box sx={{ backgroundColor: 'gray.300', px: 2, py: 4, color: 'background.default', typography: 'h1', borderLeft: 1, borderRight: 1 }} >
            {value}
        </Box>
    )
}
export default Screen;