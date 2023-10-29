import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let calculatedResult;

    switch (operation) {
      case 'add':
        calculatedResult = number1 + number2;
        break;
      case 'subtract':
        calculatedResult = number1 - number2;
        break;
      case 'multiply':
        calculatedResult = number1 * number2;
        break;
      case 'divide':
        calculatedResult = number1 / number2;
        break;
      default:
        calculatedResult = 'Invalid operation';
    }

    setResult(calculatedResult);
  };

  return (
    <div className="calculator">
      <h2>Kulkekator</h2>
      <input
        type="text"
        placeholder="Enter number 1"
        value={num1}
        onChange={handleNum1Change}
      />
      <select value={operation} onChange={handleOperationChange}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input
        type="text"
        placeholder="Enter number 2"
        value={num2}
        onChange={handleNum2Change}
      />
      <button onClick={calculateResult}>Calculate</button>
      <div className="result">Result: {result}</div>
    </div>
  );
}

export default Calculator;
