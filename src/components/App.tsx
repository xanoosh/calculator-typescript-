import '../styles/index.scss';
import CalculatorButtons from './CalculatorButtons';
import { useState } from 'react';

//propably gonna use eval on '=' button to calculate stuff and put it in calculation state

function App() {
  const [calculation, setCalculation] = useState('');
  const [calculatorBtnList, setCalculatorBtnList] = useState([
    { val: 1 },
    { val: 2 },
    { val: 3 },
    { val: '+' },
    { val: '-' },
    { val: '=' },
  ]);

  const handleCalculation = (e: MouseEvent) => {
    const val = e.currentTarget as HTMLButtonElement;
    console.log(val.textContent);
    setCalculation((prev) => prev + val.textContent);
    // setCalculation((prev) => 's');
  };
  const handleResult = (e: MouseEvent) => {
    const val = e.currentTarget as HTMLButtonElement;
    console.log(val.textContent);
    setCalculation((prev) => eval(prev));
  };
  return (
    <div className="calculator">
      <CalculatorButtons
        btnList={calculatorBtnList}
        calculationEvent={handleCalculation}
        resultEvent={handleResult}
      />
      <h2>Result: {calculation}</h2>
    </div>
  );
}

export default App;
