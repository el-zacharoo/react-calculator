import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../theme';
import Screen from './Screen';
import CalculatorButton from './CalculatorButton';

export const App = () => {
  const [calc, setCalc] = useState<any>({
    sign: "",
    number: 0,
    reset: 0,
  });

  console.log(calc)

  const numClickHandler = (e: any) => {
    const value = e
    console.log(value);
    setCalc({ number: value })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">

        <Screen value={calc.number ? calc.number : calc.reset} />
        <Grid columns={4} sx={border} container>
          {numberArr.map((item, index) =>
            <Grid xs={item.span} key={index} >
              <CalculatorButton onClick={() => numClickHandler(item.value)} colour={item.colour}>{item.title}</CalculatorButton>
            </Grid>
          )}
        </Grid>
      </Container>
    </ThemeProvider >
  )
};

export default App;

const numberArr = [
  { title: 'AC', colour: 'gray.200', value: 0, span: 1 },
  { title: '+/-', colour: 'gray.200', value: "+/-", span: 1 },
  { title: '%', colour: 'gray.200', value: "%", span: 1 },

  { title: '/', colour: 'primary.main', value: '/', span: 1 },

  { title: 1, colour: 'gray.100', value: 1, span: 1 },
  { title: 2, colour: 'gray.100', value: 2, span: 1 },
  { title: 3, colour: 'gray.100', value: 3, span: 1 },

  { title: 'X', colour: 'primary.main', value: '*', span: 1 },

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
  '--Grid-borderWidth': '2px',
  borderTop: 'var(--Grid-borderWidth) solid',
  borderLeft: 'var(--Grid-borderWidth) solid',
  borderColor: 'divider',
  '& > div': {
    borderRight: 'var(--Grid-borderWidth) solid',
    borderBottom: 'var(--Grid-borderWidth) solid',
    borderColor: 'divider',
  },
};

// const toLocaleString = (num: any) => {
//   String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
// }

// const removeSpaces = (num: any) => { num.toString().replace(/\s/g, ""); }