import * as React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

type ScreenTypes = {
    value: number[] & number;
    type: string;
}

export const Screen = (props: ScreenTypes): React.ReactElement => {
    const { value, type } = props;
    let header
    if (value.length > 15) {
        header = 'h5'
    }
    else {
        header = 'h1'
    }
    switch (type) {
        case 'mac': return <MacScreen header={header} {...props} />
        case 'android': return <AndroidScreen header={header} {...props} />
        default: throw new Error('Invalid type')
    }
}
export default Screen;

type ScreenTypeProps = {
    value: number[] & number;
    header: string;
}

const MacScreen = (props: ScreenTypeProps): React.ReactElement => {
    const { value, header } = props;

    return (
        <Box sx={{
            backgroundColor: 'gray.300',
            px: 2, py: 4,
            color: 'background.default',
            typography: header,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderColor: 'gray.300',
            display: 'flex',
            justifyContent: 'flex-end',
        }} >
            {value}
        </Box>
    )
}
const AndroidScreen = (props: ScreenTypeProps) => {
    const { value, header } = props;

    return (
        <>
            <Stack
                direction="row"
                justifyContent='flex-end'
                sx={{
                    px: 2, py: 4,
                    typography: header,
                    display: 'flex',
                    justifyContent: 'flex-end',
                }} >
                {value}
            </Stack>
            <Divider />
        </>
    )
}