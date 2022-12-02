import styled from 'styled-components';
import { Technologies } from '../../../DB/data';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;
const Boxes = styled.div`
  flex-basis: 48%;
  border-radius: 8rem;
  background-color: ${({ theme }) => theme.mainColor};
`;
const Title = styled.h3`
  font-family: ${({ theme }) => theme.headerFont};
  font-size: 2rem;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.textFontSansserif};
`;
const Line = styled.div`
  list-style: none;
  padding: 0.7rem;
  font-family: ${({ theme }) => theme.textFontSansserif};
`;
// const Text = styled.p``;
const Informations: React.FC = () => {
  const workingOn: string =
    'Post website abour games with dynamic user interaction';

  return (
    <Container>
      <Boxes>
        <Title>Technologies I work with</Title>
        <List>
          {Technologies.map((x) => {
            return <Line key={x}>{x}</Line>;
          })}
        </List>
      </Boxes>
      <Boxes>
        <Title>Currently working on</Title>
        <Line>{workingOn}</Line>
      </Boxes>
    </Container>
  );
};
export default Informations;
