import React from 'react';
import styled from 'styled-components';
// import px2vw from '../../../Theme/Utils';

const Box = styled.a`
  /* position: */
  flex-basis: 45%;
  /* height: 22rem; */
  margin: 1rem;
  text-decoration: none;
  /* background-color: ${({ theme }) => theme.mainColor}; */
  border: 1px solid ${({ theme }) => theme.mainColor};
  border-radius: 3rem;
  /* cursor: pointer; */
  @media (max-width: 850px){
    flex-basis: auto;
  }
  @media (max-width: 648px){
    flex-basis: auto;
  }
`;

const Img = styled.img`
  /* 500px x 270px */
  width: 100%;
  height: 65%;
  /* object-fit: unset; */
  border-radius: 3rem 3rem 1rem 1rem;
  /* cursor: pointer; */
  @media (max-width: 648px){}
`;
const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.textFontSansserif};
  @media (max-width: 648px){
  /* font-size: 1.1rem;
  margin: 0.2rem; */
  }
`;
const Text = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 1.2rem;
  /* padding: 0 1rem 1rem 1rem; */
  @media (max-width: 648px){
  font-size: 1rem;
  margin: 0.2rem;
  display: none;
  }
`;

interface Props {
  title: string;
  shortDescription: string;
  image: string;
  ghLink?: string;
}

const ProjectBox: React.FC<Props> = ({
  title,
  shortDescription,
  image,
  ghLink,
}) => {
  return (
    <Box href={ghLink} target="_blank">
      <Img
        src={`../../../../${process.env.PUBLIC_URL}/images/${image}`}
        alt="project"
      />
      <Title>{title}</Title>
      <Text>{shortDescription}</Text>
    </Box>
  );
};

export default ProjectBox;
