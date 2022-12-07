import React from 'react';
import './App.css';
import Navbar from './Components/View/Navbar/Navbar';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { dark } from './Theme/Theme';
import Home from './Components/Page/Home/Home';
import ErrorPage from './Components/Page/Error/ErrorPage';
import InBuild from './Components/Page/InBuild/InBuild';
import Contact from './Components/Page/Contact/Contact';

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

const MainContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.boxShadowAll};
  padding: 1rem 3rem 3rem 3rem;
  border-radius: 0 0 2rem 2rem;
`;

// const Container = styled.div`
//   margin: 0 10rem 0 10rem;
// `;

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <MainContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<InBuild />} />
            <Route path="/projects" element={<InBuild />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
