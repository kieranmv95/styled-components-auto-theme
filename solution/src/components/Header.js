import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  nav {
    padding: 2rem 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
    justify-content: center;
  }

  ul li {
    cursor: pointer;
    font-size: 1.1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <nav>
        <ul>
          <li>Documentation</li>
          <li>Showcase</li>
          <li>Ecosystem</li>
          <li>Releases</li>
        </ul>
      </nav>
    </HeaderStyles>
  )
}