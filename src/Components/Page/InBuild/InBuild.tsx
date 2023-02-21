import styled from 'styled-components';
import PageTitle from '../../View/PageTitle/PageTitle';

const Container = styled.div`
  /* color: black; */
  font-size: 3rem;
  font-style: italic;
`;

const Text: string = 'Website are under construction'


const InBuild: React.FC = () => {
  return (
    <Container>
      <PageTitle>{Text}</PageTitle>
    </Container>
  );
};

export default InBuild;
