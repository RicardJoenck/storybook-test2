import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: red;
`;

export function TraderButton(props: any) {
  console.log(props);
  return <Button onClick={props.onClick}>{props.children}</Button>;
}
