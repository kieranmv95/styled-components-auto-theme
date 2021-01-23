import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const HomePageStyles = styled.div`
  padding-top: 4rem;
  margin: 0 auto;
  padding: 4rem 1rem 0 1rem;
  max-width: 768px;
  text-align: center;
  img {
    max-width: 350px;
    width: 100%;
  }
  .button-grid {
    display: grid;
    max-width: 500px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin-top: 4rem;
  }

`;

export default function HomePage() {
  return (
    <HomePageStyles>
      <img
        src="https://www.styled-components.com/atom.png"
        alt="Styled Components Logo"
      />
      <h1>Styled Components</h1>
      <p>Use the best bits of ES6 and CSS to style your apps without stress</p>
      <div className="button-grid">
        <Button>GitHub</Button>
        <Button>Documentation</Button>
      </div>
    </HomePageStyles>
  );
};
