import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
  cursor: pointer;
  outline: none;
  background: var(--button-bg);
  border: var(--button-border);
  color: var(--button-color);
  border-radius: 3px;
  padding: 1rem;
  font-size: 1.05rem;
  &:hover {
    background: var(--button-bg-hover);
  }
  &:focus {
    box-shadow: var(--button-focus);
  }
`

export default function Button({ onClick, children }) {
  return (
    <ButtonStyles onClick={onClick}>{children}</ButtonStyles>
  );
}
