import React from 'react';
import './App.css';
import Navbar from './Components/View/Navbar/Navbar';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { dark } from './Theme/Theme';
import Home from './Components/Page/Home/Home';
import ErrorPage from './Components/Page/Error/ErrorPage';
import InBuild from './Components/Page/InBuild/InBuild';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${dark.textFont};
    color:${dark.color};
    background-color: ${dark.mainDarkColor};
  };
  a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  margin: 0 10rem 0 10rem;
`;

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<InBuild/>}/>
            <Route path="/contact" />
            <Route path="/about" />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
