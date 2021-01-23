import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages";
import GlobalStyles from './styles/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import Button from './components/Button';

const ContainerStyles = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  .button {
    margin-top: 2rem;
    text-align: center;
  }
`;

const themes = {
  light: {
    background_color: '#FFF',
    copy_color: '#000',
    button_bg: '#FFF',
    button_bg_hover: 'grey',
    button_color: '#000',
    button_border: '2px solid #000',
    button_focus: '0 0 0 3px rgba(0,0,0,.5)',
  },
  dark: {
    background_color: '#000',
    copy_color: '#FFF',
    button_bg: '#000',
    button_bg_hover: 'grey',
    button_color: '#FFF',
    button_border: '2px solid #FFF',
    button_focus: '0 0 0 3px rgba(255,255,255,.5)',
  }
}

function App() {
  const [theme, toggleTheme] = useTheme();

  if(!theme) return null;

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <ContainerStyles>
        <Header />
        <main>
          <HomePage />
          <div className="button">
            <Button onClick={() => toggleTheme()}>Toggle Theme</Button>
          </div>
        </main>
        <Footer />
      </ContainerStyles>
    </ThemeProvider>
  );
}

var container = document.getElementById("app");
ReactDOM.render(<App />, container);