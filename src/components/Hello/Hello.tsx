import * as React from 'react';
import Button from '../Button/Button';

interface IProps {
  languageName: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ languageName, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('More enthusiasm please');
  }

  const decrement = onDecrement ? <Button text="-" action={onDecrement} /> : null;
  const increment = onIncrement ? <Button text="+" action={onIncrement} /> : null;

  const buttons =
    increment || decrement ? (
      <div className="enthusiasm">
        {decrement}
        {increment}
      </div>
    ) : null;

  return (
    <div className="hello">
      <div className="greeting">Hello {languageName + getExclamationMarks(enthusiasmLevel)}</div>
      {buttons}
    </div>
  );
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
