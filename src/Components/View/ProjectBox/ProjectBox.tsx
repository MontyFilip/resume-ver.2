import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  flex-basis: 45%;
  margin: 1rem;
  text-decoration: none;
  /* background-color: ${({ theme }) => theme.mainColor}; */
  border: 1px solid ${({ theme }) => theme.mainColor};
  border-radius: 3rem;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 70%;
  object-fit: unset;
  border-radius: 3rem 3rem 1rem 1rem;
  /* cursor: pointer; */
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.textFontSansserif};
`;
const Text = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 1.2rem;
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
    <Box>
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
