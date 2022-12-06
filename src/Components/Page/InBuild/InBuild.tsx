import styled from 'styled-components';
import PageTitle from '../../View/PageTitle/PageTitle';

const Container = styled.div`
  /* color: black; */
  font-size: 3rem;
  font-style: italic;
`;
const InBuild = () => {
  return (
    <Container>
      <PageTitle>Website are under construction</PageTitle>
    </Container>
  );
};

export default InBuild;
