import * as React from 'react';

export interface IProps {
  languageName: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ languageName, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('More enthusiasm please');
  }
  return (
    <div className="hello">
      <div className="greeting">Hello {languageName + getExclamationMarks(enthusiasmLevel)}</div>
      <div className="enthusiasm">
        <button className="decrementButton" onClick={onDecrement}>
          -
        </button>
        <button className="incrementButton" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
