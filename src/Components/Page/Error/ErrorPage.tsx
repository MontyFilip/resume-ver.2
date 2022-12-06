import PageTitle from '../../View/PageTitle/PageTitle';
import styled from 'styled-components';

const Container = styled.div`
  /* color: black; */
  padding: 3rem;
  font-size: 2.5rem;
  font-family: 'Times New Roman', Times, serif;
`;

const ErrorPage = () => {
  return (
    <Container>
      <PageTitle>404 NOT FOUND</PageTitle>
    </Container>
  );
};

export default ErrorPage;
