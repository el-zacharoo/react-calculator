import * as React from 'react';

import Grid from '@mui/material/Unstable_Grid2';

import Screen from './Screen';
import CalculatorButton from './CalculatorButton';

interface AndroidCalculator {
    screen: any;
    onClick: Function;
}

export const AndroidCalculator = (props: AndroidCalculator) => {
    const { onClick, screen } = props
    return (
        <>
            <Screen value={screen} />
            <Grid columns={4} sx={border} container>
                {calcArr.map((item, index) =>
                    <Grid xs={item.span} key={index} >
                        <CalculatorButton value={item.value} onClick={onClick} colour={item.colour} >{item.title}</CalculatorButton>
                    </Grid>
                )}
            </Grid>
        </>
    )
}


const calcArr = [
    { title: 'C', colour: 'gray.200', value: 'C', span: 1 },
    { title: '+/-', colour: 'gray.200', value: "+/-", span: 1 },
    { title: '%', colour: 'gray.200', value: "%", span: 1 },

    { title: '÷', colour: 'primary.main', value: '/', span: 1 },

    { title: 1, colour: 'gray.100', value: 1, span: 1 },
    { title: 2, colour: 'gray.100', value: 2, span: 1 },
    { title: 3, colour: 'gray.100', value: 3, span: 1 },

    { title: 'X', colour: 'primary.main', value: 'X', span: 1 },

    { title: 4, colour: 'gray.100', value: 4, span: 1 },
    { title: 5, colour: 'gray.100', value: 5, span: 1 },
    { title: 6, colour: 'gray.100', value: 6, span: 1 },

    { title: '-', colour: 'primary.main', value: '-', span: 1 },

    { title: 7, colour: 'gray.100', value: 7, span: 1 },
    { title: 8, colour: 'gray.100', value: 8, span: 1 },
    { title: 9, colour: 'gray.100', value: 9, span: 1 },

    { title: '+', colour: 'primary.main', value: '+', span: 1 },

    { title: 0, colour: 'gray.100', value: 0, span: 2 },
    { title: '.', colour: 'gray.100', value: '.', span: 1 },

    { title: '=', colour: 'primary.main', value: "=", span: 1 },
];

const border = {
    '--Grid-borderWidth': '1px',
    borderTop: 'var(--Grid-borderWidth) solid',
    borderLeft: 'var(--Grid-borderWidth) solid',
    borderColor: 'secondary.main',
    '& > div': {
        borderRight: 'var(--Grid-borderWidth) solid',
        borderBottom: 'var(--Grid-borderWidth) solid',
        borderColor: 'secondary.main',
    },
};