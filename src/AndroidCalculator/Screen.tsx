import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';

export const Screen = ({ value }: any) => {
    return (
        <>
            <Stack
                direction="row"
                justifyContent='flex-end'
                sx={{
                    px: 2, py: 4,
                    typography: 'h1',
                    display: 'flex',
                    justifyContent: 'flex-end',
                }} >
                {value}
            </Stack>
            <Divider />
        </>
    )
}
export default Screen;