import './App.css';
import Button from './Button';
import { useState } from 'react';

//propably gonna use eval on '=' button to calculate stuff and put it in calculation state

function App() {
  const [calculation, setCalculation] = useState<string>('');
  const handleClick = (e: MouseEvent) => {
    const val = e.currentTarget as HTMLButtonElement;
    console.log(val.textContent);
    setCalculation((prev) => prev + val.textContent);
    // setCalculation((prev) => 's');
  };
  return (
    <div className="App">
      <h2>Current state: {calculation}</h2>
      <Button val="1" click={handleClick} />
    </div>
  );
}

export default App;
