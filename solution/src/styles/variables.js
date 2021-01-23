import { css } from 'styled-components';

const variables = css `
  :root {
    --background-color: ${({ theme }) => theme.background_color};
    --copy-color: ${({ theme }) => theme.copy_color};

    --button-bg: ${({ theme }) => theme.button_bg};
    --button-bg-hover: ${({ theme }) => theme.button_bg_hover};
    --button-color: ${({ theme }) => theme.button_color};
    --button-border: ${({ theme }) => theme.button_border};
    --button-focus: ${({ theme }) => theme.button_focus};
  }
`;

export default variables;
