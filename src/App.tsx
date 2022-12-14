import React, { useState, useEffect } from 'react';

import Calculator from './Calculator';

type Value = String | Number;

export const App = () => {
  const [number, setNumber] = useState<any>([]);
  const [sign, setSign] = useState<String>("");
  const [reset, setReset] = useState<number>(0);

  const screen = number.length === 0 ? reset : number;

  const handleKeyDown = (e: KeyboardEvent) => {
    const value = e.key;
    if (value === "Backspace") {
      setNumber(number.slice(0, -1));
    } else if (value === "Escape") {
      setNumber([]);
      setSign("");
      setReset(0);
    }
    else {
      setNumber(number + value);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true);
  })

  const handlerFunc = (e: Value) => {
    const value = e;

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
      let num = number ? parseFloat(removeSpaces(number)) : 0;
      let res = reset ? parseFloat(removeSpaces(reset)) : 0;
      setNumber(num /= Math.pow(100, 1))
      setReset(res /= Math.pow(100, 1))
      setSign("");
    }
    else {
      setNumber(number + value);
      handleKeyDown;
    }
  }

  return <Calculator screen={screen} onClick={handlerFunc} />
};

export default App;

const toLocaleString = (number: String) =>
  String(number).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (number: number) => number.toString().replace(/\s/g, "");