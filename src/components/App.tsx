import '../styles/index.scss';
import CalculatorButtons from './CalculatorButtons';
import { useState } from 'react';

//propably gonna use eval on '=' button to calculate stuff and put it in calculation state

function App() {
  const [calculation, setCalculation] = useState<string>('');
  const [calculatorBtnList, setCalculatorBtnList] = useState([
    { val: 1 },
    { val: 2 },
    { val: 3 },
    { val: '+', useOnce: true },
    { val: '-', useOnce: true },
    { val: '*', useOnce: true },
    { val: '/', useOnce: true },
    { val: '=' },
  ]);

  const handleCalculation = (e: MouseEvent) => {
    const val = e.currentTarget as HTMLButtonElement;

    setCalculation((prev) => prev + val.textContent);
    // setCalculation((prev) => {
    //   if (prev.length) return prev + val.textContent;
    //   if (!prev.length) return '0' + val.textContent;
    // });
  };
  const handleResult = (e: MouseEvent) => {
    const val = e.currentTarget as HTMLButtonElement;
    console.log(val.textContent);
    setCalculation((prev) => eval(prev));
  };
  return (
    <div className="app">
      <div className="calculator">
        <CalculatorButtons
          btnList={calculatorBtnList}
          calculationEvent={handleCalculation}
          resultEvent={handleResult}
        />
        <h2>Result: {calculation}</h2>
      </div>
    </div>
  );
}

export default App;
