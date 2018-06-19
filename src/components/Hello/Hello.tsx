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
  return (
    <div className="hello">
      <div className="greeting">Hello {languageName + getExclamationMarks(enthusiasmLevel)}</div>
      <div className="enthusiasm">
        <Button text="-" action={onDecrement!} classNames="decrementButton" />
        <Button text="+" action={onIncrement!} classNames="incrementButton" />
      </div>
    </div>
  );
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
