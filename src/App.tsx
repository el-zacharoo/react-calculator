import React, { useState, useCallback, useEffect } from 'react';

import Calculator from '@/Calculator';

// TODO infer correct types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CalcNumber = any;

export const App = (): React.ReactElement => {
  const [number, setNumber] = useState<CalcNumber>([]);
  const [sign, setSign] = useState<string>("");
  const [reset, setReset] = useState<number>(0);
  const screen = number.length === 0 ? reset : number;


  const handlerFunc = useCallback((value: number | string): void => {
    if (value === "C") {
      setNumber([]);
      setSign("");
      setReset(0);
    }

    else if (value === ".") {
      setNumber(number + value);
    }

    else if (value === "/" || value === "X" || value === "-") {
      setSign(value);
      setReset(!reset && number ? number : reset)
      setNumber([]);
    }

    else if (value === "+") {
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
        const math = (a: number, b: number, sign: string) =>
          sign === "/" ? a / b : sign === "X" ? a * b : sign === "-" ? a - b : a + b;

        setNumber(number === 0 && sign === "/" ? "Can't divide with 0" : toLocaleString(
          math(parseFloat(removeSpaces(reset)), parseFloat(removeSpaces(number)), sign)
        )); 12
      }
    }
    else if (value === "%") {
      let num = number ? parseFloat(removeSpaces(number as number)) : 0;
      let res = reset ? parseFloat(removeSpaces(reset)) : 0;
      setNumber(num /= Math.pow(100, 1))
      setReset(res /= Math.pow(100, 1))
      setSign("");
    }
    else {
      setNumber(number + value);
    }
  }, [number, reset, sign])

  const handleKeyDown = useCallback((e: KeyboardEvent): void => {
    const values = ["Escape", "Backspace", "x", "/", "+", "-", ".", "=", "%", "+/-", "Enter", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    if (values.map((value) => value.toString()).includes(e.key)) {
      if (e.key === "Escape") {
        return handlerFunc("C");
      }
      else if (e.key === "x") {
        return handlerFunc("X");
      }
      else if (e.key === "Enter") {
        return handlerFunc("=");
      }
      else if (e.key === "Backspace") {
        return setNumber(number.slice(0, -1));
      }
      else if (e.key === "Shift") {
        return setSign("");
      }
      return handlerFunc(e.key);
    }
  }, [handlerFunc, number])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return <Calculator screen={screen} onClick={handlerFunc} />
};

export default App;

const toLocaleString = (number: string | number): string =>
  String(number).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (number: number): string => number.toString().replace(/\s/g, "");