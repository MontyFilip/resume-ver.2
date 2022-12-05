import { text } from 'stream/consumers';
import styled from 'styled-components';

const Title = styled.h2`
  padding: ${({ theme }) => theme.baseSize * 3};
  font-size: 4rem;
  text-align: center;
  /* text-transform: uppercase; */
  font-family: 'Times New Roman', Times, serif;
`;

type Props = {
  children: string;
};

const PageTitle: React.FC<Props> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default PageTitle;
