import * as React from 'react';

import Box from '@mui/material/Box';

interface ScreenProps {
    value: any;
}

export const Screen = (props: ScreenProps) => {
    const { value } = props;

    return (
        <Box sx={{ backgroundColor: 'gray.300', px: 2, py: 4, color: 'background.default', typography: 'h1', border: 2 }}>
            {value}
        </Box>
    )
}
export default Screen;