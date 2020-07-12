import React from 'react';
import { action } from '@storybook/addon-actions';
import { TraderButton } from '../components/button';

export default {
  title: 'Button',
  component: TraderButton,
};

export const Text = () => <TraderButton onClick={action('clicked')}>Hello Button</TraderButton>;

export const Emoji = () => (
  <TraderButton onClick={action('clicked')}>
    <span role='img' aria-label='so cool'>
      😀 😎 👍 💯
    </span>
  </TraderButton>
);
