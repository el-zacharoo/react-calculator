import React, { useEffect } from 'react';

import IconButton from '@mui/material/IconButton';

interface CalculatorButtonProps {
    colour: Object;
    value: String | Number;
    children: React.ReactNode;
    onClick: Function;
}

export const CalculatorButton = (props: CalculatorButtonProps) => {
    const { colour, value, children, onClick } = props;

    const dim = 75;

    const style =
        value === "="
            ?
            { backgroundColor: colour, width: dim, height: dim, color: 'background.paper' }
            :
            { backgroundColor: 'background.default', color: colour, width: dim, height: dim }


    return (
        <IconButton sx={style} onClick={() => onClick(value)}  >
            {children}
        </IconButton >

    )
}
export default CalculatorButton;