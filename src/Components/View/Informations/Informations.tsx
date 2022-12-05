import styled from 'styled-components';
import { Technologies } from '../../../DB/data';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;
const Boxes = styled.div`
  position: relative;
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
  justify-content: center;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.textFontSansserif};
`;
const Line = styled.div`
  list-style: none;
  justify-content: center;
  padding: 0.7rem;
  font-family: ${({ theme }) => theme.textFontSansserif};
`;

const Informations: React.FC = () => {
  const workingOn: string =
    'Dynamic website for training and examinations';

  return (
    <Container>
      <Boxes>
        <Title>Currently I working on</Title>
        <Line>{workingOn}</Line>
      </Boxes>
      <Boxes>
        <Title>Technologies I work in</Title>
        <List>
          {Technologies.map((x) => {
            return <Line key={x}>{x}</Line>;
          })}
        </List>
      </Boxes>
    </Container>
  );
};
export default Informations;
