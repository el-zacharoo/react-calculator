import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface CalculatorButtonProps {
    colour: Object;
    value: String | Number;
    children: React.ReactNode;
    onClick: Function;
}

export const CalculatorButton = (props: CalculatorButtonProps) => {
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
export default CalculatorButton;