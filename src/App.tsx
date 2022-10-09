import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../theme';
import Screen from './Screen';
import CalculatorButton from './CalculatorButton';

// type NumType = Number | String | Array<Number>

export const App = () => {
  const [number, setNumber] = useState<any>([]);
  const [sign, setSign] = useState<String>("");
  const [reset, setReset] = useState<number>(0);

  const handlerFunc = (value: any) => {
    if (value === "C") {
      setNumber([]);
      setSign("");
      setReset(0);
    }
    else if (value === ".") {
      setNumber(number + value);
    }
    else if (value === "/" || value === "X" || value === "-" || value === "+") {
      setSign(value);
      setReset(!reset && number ? number : reset)
      setNumber([]);
    }
    else if (value === "+/-") {
      setNumber(number * -1);
      setReset(reset * -1);
    }
    else if (value === "=") {
      if (sign && number) {
        const math = (a: any, b: any, sign: String) =>
          sign === "+" ? a + b
            : sign === "-" ? a - b
              : sign === "X" ? a * b : a / b;
        setNumber(number === 0 && sign === "/" ? "Can't divide with 0" : toLocaleString(
          math(
            Number(removeSpaces(reset)),
            Number(removeSpaces(number)),
            sign
          )),
        )
      }
    }
    else if (value === "%") {
      var num = number ? parseFloat(removeSpaces(number)) : 0;
      var res = reset ? parseFloat(removeSpaces(reset)) : 0;
      setNumber(num /= Math.pow(100, 1))
      setReset(res /= Math.pow(100, 1))
      setSign("");
    }
    else {
      setNumber(number + value);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <Screen value={number.length === 0 ? reset : number} />
        <Grid columns={4} sx={border} container>
          {calcArr.map((item, index) =>
            <Grid xs={item.span} key={index} >
              <CalculatorButton value={item.title} onClick={() => handlerFunc(item.value)} colour={item.colour} />
            </Grid>
          )}
        </Grid>
      </Container>
    </ThemeProvider >
  )
};

export default App;

const calcArr = [
  { title: 'AC', colour: 'gray.200', value: 'C', span: 1 },
  { title: '+/-', colour: 'gray.200', value: "+/-", span: 1 },
  { title: '%', colour: 'gray.200', value: "%", span: 1 },

  { title: '/', colour: 'primary.main', value: '/', span: 1 },

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

const toLocaleString = (number: String) =>
  String(number).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (number: any) => number.toString().replace(/\s/g, "");