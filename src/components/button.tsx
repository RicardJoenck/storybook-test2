import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 4px;
`;

interface Props {
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

const TraderButton: FC<Props> = ({ children, disabled = false, onClick }: Props) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export default TraderButton;
