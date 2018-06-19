import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  text: string;
  action: () => void;
}

const StyledButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: #000;
  border: 2px solid #000;
`;

const button = ({ text, action }: IProps): JSX.Element => {
  return <StyledButton onClick={action}>{text}</StyledButton>;
};

export default button;
