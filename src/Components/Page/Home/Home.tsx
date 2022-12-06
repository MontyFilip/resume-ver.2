import React from 'react';
import styled from 'styled-components';
import Hero from '../../View/Hero/Hero';
import Informations from '../../View/Informations/Informations';
import { HomePage } from '../../../DB/data';
import { WorkingOn } from '../../../DB/data';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  z-index: -1;
  margin: 5rem 0 5rem 0;

  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;



const Home: React.FC = () => {
  return (
    <Box>
      <Hero title={HomePage.title} text={HomePage.text}/>
      <Informations text={WorkingOn}/>
    </Box>
  );
};

export default Home;
