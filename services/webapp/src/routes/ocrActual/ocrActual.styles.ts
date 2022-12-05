import styled from 'styled-components';
import { Breakpoint, media } from '../../theme/media';

export const Container = styled.section`
  padding: 20px 30px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  ${media(Breakpoint.MOBILE)`
    flex-direction: column;
  `};
  ${media(Breakpoint.TABLET)`
    flex-direction: row;
  `};
`;

export const P = styled.p`
  font-size: 23px;
  margin: 21px 40px;
  color: #969696;
`;

export const ButtonSection = styled.div`
  margin: 35px 0;
  display: flex;
  justify-content: center;
`;
