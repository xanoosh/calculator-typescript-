import './App.css';
import Button from './Button';
import { useState } from 'react';

//propably gonna use eval on '=' button to calculate stuff and put it in calculation state

function App() {
  const [calculation, setCalculation] = useState<string>('');
  const handleCalculation = (e: MouseEvent) => {
    const val = e.currentTarget as HTMLButtonElement;
    console.log(val.textContent);
    setCalculation((prev) => prev + val.textContent);
    // setCalculation((prev) => 's');
  };
  const handleResult = (e: MouseEvent) => {
    const val = e.currentTarget as HTMLButtonElement;
    console.log(val.textContent);
    const calculate = calculation;
    setCalculation((prev) => eval(prev));
  };
  return (
    <div className="App">
      <h2>Current state: {calculation}</h2>
      <Button val="1" click={handleCalculation} />
      <Button val="2" click={handleCalculation} />
      <Button val="3" click={handleCalculation} />
      <Button val="+" click={handleCalculation} />
      <Button val="-" click={handleCalculation} />
      <Button val="=" click={handleResult} />
    </div>
  );
}

export default App;
