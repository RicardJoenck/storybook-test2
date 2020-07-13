import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 4px;
`;

interface Props {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function TraderButton({ children, disabled, onClick }: Props): JSX.Element {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
}
