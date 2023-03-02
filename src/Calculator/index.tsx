import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import { Theme, ThemeProvider } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Unstable_Grid2';

import { androidTheme } from '../androidTheme';
import { macTheme } from '../macTheme';
import CalculatorButton from './CalculatorButton';
import Screen from './Screen';

type CalculatorTypesProps = {
    screen: number[] & number;
    onClick: (value: string | number) => void;
}

type TabProps = {
    label: string;
    state: number;
    theme: Theme;
}

type CalculatorArray = {
    title: string | number;
    colour: string;
    value: number | string;
    span: number
}

export const Calculator = (props: CalculatorTypesProps): React.ReactElement => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (newValue: number) => {
        setValue(newValue);
    };

    const theme = themeSwitch(value);

    return (
        <ThemeProvider theme={theme} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                <Tabs value={value}  >
                    {tabArr.map((tab: TabProps, index: number) =>
                        <Tab onClick={() => handleChange(index)} key={index} label={tab.label} />
                    )}
                </Tabs>
            </Box>
            <Container maxWidth="xs">
                <Card>
                    {tabArr[0].state === value && <Mac {...props} />}
                    {tabArr[1].state === value && <Android {...props} />}
                </Card>
            </Container>
        </ThemeProvider>
    );
}

export default Calculator;

const Android = (props: CalculatorTypesProps): React.ReactElement => {
    const { screen } = props;

    return (
        <CardContent>
            <Screen type="android" value={screen} />
            <Grid sx={{ mt: 2 }} spacing={1} columns={4} container>
                {androidArr.map((item: CalculatorArray, index: number) =>
                    <Grid xs={item.span} key={index} >
                        <CalculatorButton type="android" value={item.value} {...props} colour={item.colour} >{item.title}</CalculatorButton>
                    </Grid>
                )}
            </Grid>
        </CardContent>
    )
}

const Mac = (props: CalculatorTypesProps): React.ReactElement => {
    const { screen } = props;

    return (
        <>
            <Screen type="mac" value={screen} />
            <Grid columns={4} sx={border} container>
                {macArr.map((item, index) =>
                    <Grid xs={item.span} key={index} >
                        <CalculatorButton type="mac" value={item.value} {...props} colour={item.colour} >{item.title}</CalculatorButton>
                    </Grid>
                )}
            </Grid>
        </>
    )
}


const themeSwitch = (value: number): Theme => {
    if (value === 1) {
        return androidTheme;
    }
    else if (value === 2) {
        return androidTheme;
    }
    return macTheme;
}

const tabArr: Array<TabProps> = [
    { label: 'Mac Calculator', state: 0, theme: macTheme },
    { label: 'Android Calculator', state: 1, theme: androidTheme }
]


const macArr: Array<CalculatorArray> = [
    { title: 'C', colour: 'gray.200', value: 'C', span: 1 },
    { title: '+/-', colour: 'gray.200', value: "+/-", span: 1 },
    { title: '%', colour: 'gray.200', value: "%", span: 1 },

    { title: '÷', colour: 'primary.main', value: '/', span: 1 },

    { title: 7, colour: 'gray.100', value: 7, span: 1 },
    { title: 8, colour: 'gray.100', value: 8, span: 1 },
    { title: 9, colour: 'gray.100', value: 9, span: 1 },


    { title: 'X', colour: 'primary.main', value: 'X', span: 1 },

    { title: 4, colour: 'gray.100', value: 4, span: 1 },
    { title: 5, colour: 'gray.100', value: 5, span: 1 },
    { title: 6, colour: 'gray.100', value: 6, span: 1 },

    { title: '-', colour: 'primary.main', value: '-', span: 1 },

    { title: 1, colour: 'gray.100', value: 1, span: 1 },
    { title: 2, colour: 'gray.100', value: 2, span: 1 },
    { title: 3, colour: 'gray.100', value: 3, span: 1 },

    { title: '+', colour: 'primary.main', value: '+', span: 1 },

    { title: 0, colour: 'gray.100', value: 0, span: 2 },
    { title: '.', colour: 'gray.100', value: '.', span: 1 },

    { title: '=', colour: 'primary.main', value: "=", span: 1 },
];

const androidArr: Array<CalculatorArray> = [
    { title: 'C', colour: 'error.main', value: 'C', span: 1 },
    { title: '( )', colour: 'primary.main', value: "()", span: 1 },
    { title: '%', colour: 'primary.main', value: "%", span: 1 },

    { title: '÷', colour: 'primary.main', value: '/', span: 1 },

    { title: 7, colour: 'gray.100', value: 7, span: 1 },
    { title: 8, colour: 'gray.100', value: 8, span: 1 },
    { title: 9, colour: 'gray.100', value: 9, span: 1 },

    { title: 'X', colour: 'primary.main', value: 'X', span: 1 },

    { title: 4, colour: 'gray.100', value: 4, span: 1 },
    { title: 5, colour: 'gray.100', value: 5, span: 1 },
    { title: 6, colour: 'gray.100', value: 6, span: 1 },

    { title: '-', colour: 'primary.main', value: '-', span: 1 },


    { title: 1, colour: 'gray.100', value: 1, span: 1 },
    { title: 2, colour: 'gray.100', value: 2, span: 1 },
    { title: 3, colour: 'gray.100', value: 3, span: 1 },

    { title: '+', colour: 'primary.main', value: '+', span: 1 },

    { title: '+/-', colour: 'gray.100', value: "+/-", span: 1 },
    { title: 0, colour: 'gray.100', value: 0, span: 1 },
    { title: '.', colour: 'gray.100', value: '.', span: 1 },

    { title: '=', colour: 'primary.main', value: "=", span: 1 },
];

const border: object = {
    '--Grid-borderWidth': '1px',
    borderTop: 'var(--Grid-borderWidth) solid',
    borderLeft: 'var(--Grid-borderWidth) solid',
    borderColor: 'gray.300',
    '& > div': {
        borderRight: 'var(--Grid-borderWidth) solid',
        borderBottom: 'var(--Grid-borderWidth) solid',
        borderColor: 'gray.300',
    },
};