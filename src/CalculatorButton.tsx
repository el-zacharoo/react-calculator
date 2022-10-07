import * as React from 'react';

import Box from '@mui/material/Box';

interface CalculatorButtonProps {
    colour: string;
    children: React.ReactNode;
    onClick: Function;
}

export const CalculatorButton = (props: CalculatorButtonProps) => {
    const { children, colour, onClick } = props;

    return (
        <Box
            onClick={() => onClick()}
            sx={{
                typography: 'h2',
                p: 4,
                color: 'background.default',
                backgroundColor: colour,
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                '&:hover': {
                    cursor: 'pointer',
                }
            }}>
            {children}
        </Box>
    )
}
export default CalculatorButton;