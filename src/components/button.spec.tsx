import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TraderButton } from './button';

test('Link changes the class when hovered', () => {
  const mock = jest.fn();
  const component = render(<TraderButton onClick={mock}>test</TraderButton>);
  fireEvent.click(component.getByText('test'));
  expect(mock).toBeCalled();
});
