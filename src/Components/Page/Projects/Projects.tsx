import React from 'react';
import styled from 'styled-components';
import { MyProjects } from '../../../DB/data';
import ProjectBox from '../../View/ProjectBox/ProjectBox';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  padding: 1rem;
`;

const Projects: React.FC = () => {
  return <Container>
    {MyProjects.map(project => (<ProjectBox title={project.title} shortDescription={project.shortDescription} image={project.image} ghLink={project.ghLink}/>))}
  </Container>;
};

export default Projects;
