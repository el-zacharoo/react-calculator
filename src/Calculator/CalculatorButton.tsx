import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

interface CalculatorButtonProps {
    type: String;
    colour: Object;
    value: String | Number;
    children: React.ReactNode;
    onClick: Function;
}

export const CalculatorButton = (props: CalculatorButtonProps) => {
    const { type } = props;

    switch (type) {
        case 'mac': return <MacButton {...props} />
        case 'android': return <AndroidButton {...props} />
        default: throw new Error('Invalid type')
    }
}
export default CalculatorButton;

interface ButtonTypeProps {
    colour: Object;
    value: String | Number;
    children: React.ReactNode;
    onClick: Function;
}


const MacButton = (props: ButtonTypeProps) => {
    const { colour, value, children, onClick } = props;

    return (
        <Box
            component={Button}
            onClick={() => onClick(value)}
            sx={{
                borderRadius: 0,
                border: 0,
                width: '100%',
                typography: 'h2',
                p: 3,
                backgroundColor: colour,
                color: 'background.default',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                '&:hover': {
                    backgroundColor: colour,
                }
            }}>
            {children}
        </Box >
    )
}

const AndroidButton = (props: ButtonTypeProps) => {
    const { colour, value, children, onClick } = props;
    const dim = 75;

    const style =
        value === "="
            ?
            { backgroundColor: colour, width: dim, height: dim, color: 'background.paper', '&:hover': { backgroundColor: colour } }
            :
            { backgroundColor: 'background.default', color: colour, width: dim, height: dim }


    return (
        <IconButton sx={style} onClick={() => onClick(value)}  >
            {children}
        </IconButton >

    )
}