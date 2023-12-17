import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/globalStyles'

import { theme } from '../src/lib/theme'

let preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#282828',
        },
      ],
    },
  }
};

export default preview;