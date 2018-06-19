import * as React from 'react';

interface IProps {
  text: string;
  action: () => void;
  classNames?: string;
}

export default ({ text, action, classNames }: IProps): JSX.Element => {
  return (
    <button className={classNames} onClick={action}>
      {text}
    </button>
  );
};
