import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  text-align: center;
  margin: 0 0 3rem 0;
  border-radius: 8rem;
  box-shadow: ${({ theme }) => theme.boxShadowAll};
`;
const Title = styled.h1`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.headerFont};
  letter-spacing: 0.1rem;
`;
const Text = styled.p`
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.textFontSansserif};
`;
const Hero: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to websie of Filip Łysiak</Title>
      <Text>I invite you to see the informations about my job and me!</Text>
    </Container>
  );
};

export default Hero;
