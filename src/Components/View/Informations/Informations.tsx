import styled from 'styled-components';
import { Technologies } from '../../../DB/data';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  @media (max-width: 648px) {
    flex-direction: column;
  }
`;
const Boxes = styled.div`
  position: relative;
  flex-basis: 48%;
  border-radius: 8rem;
  background-color: ${({ theme }) => theme.mainColor};
  @media (max-width: 900px) {
    border-radius: 4rem;
  }
  @media (max-width: 648px) {
    border-radius: 3rem;
    margin-bottom: 2rem;
  }
`;
const Title = styled.h3`
  font-family: ${({ theme }) => theme.headerFont};
  font-size: 1.7rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.textFontSansserif};
  margin: auto;
  padding: 0rem;
`;
const Line = styled.div`
  list-style: none;
  justify-content: center;
  padding: 1rem;
  font-family: ${({ theme }) => theme.textFontSansserif};
`;

interface IInformations {
  text: string;
}

const Informations: React.FC<IInformations> = ({ text }) => {
  return (
    <Container>
      <Boxes>
        <Title>Currently I working on</Title>
        <Line>{text}</Line>
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
