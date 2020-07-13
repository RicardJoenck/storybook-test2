import React from 'react';
import { action } from '@storybook/addon-actions';
import TraderButton from '../components/button';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: TraderButton,
  decorators: [withKnobs],
};

export const Text = (): JSX.Element => (
  <TraderButton disabled={boolean('Disabled', false)} onClick={action('clicked')}>
    {text('Label', 'Hello Button')}
  </TraderButton>
);

export const Emoji = (): JSX.Element => (
  <TraderButton onClick={action('clicked')}>
    <span role='img' aria-label='so cool'>
      😀 😎 👍 💯
    </span>
  </TraderButton>
);
