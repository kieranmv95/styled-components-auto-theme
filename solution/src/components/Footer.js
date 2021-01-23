import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>Styled Components. {new Date().getFullYear()}. Made with ❤️</p>
    </FooterStyles>
  );
}
