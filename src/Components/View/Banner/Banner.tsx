import styled from 'styled-components';
// test 
const Container = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  text-align: center;
  margin: 0 0 3rem 0;
  /* padding: 2rem 0 2rem 0; */
  border-radius: 8rem;
  box-shadow: ${({ theme }) => theme.boxShadowAll};
  @media (max-width: 648px){
    border-radius: 2rem;
  }
`;
const Title = styled.h1`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.headerFont};
  letter-spacing: 0.1rem;
`;
const Text = styled.p`
  padding-top: 1rem;
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.textFontSansserif};
`;

interface Props {
  title: string;
  text: string;
  text2?: string;
  text3?: string;
}
const Hero: React.FC<Props> = ({ title, text, text2, text3 }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {text2 === undefined ? undefined : <Text>{text2}</Text>}
      {text3 === undefined ? undefined : <Text>{text3}</Text>}
    </Container>
  );
};

export default Hero;
