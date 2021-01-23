import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import typography from './typography';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${variables}
  ${typography}

  body {
    background: var(--background-color);
  }
`;

export default GlobalStyles;