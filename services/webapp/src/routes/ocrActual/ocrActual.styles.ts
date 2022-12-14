import styled from 'styled-components';
import { Breakpoint, media } from '../../theme/media';

export const Container = styled.section`
  padding: 20px 30px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;

  ${media(Breakpoint.MOBILE)`
    flex-direction: column;
     margin-top: 20px;
  `};
  ${media(Breakpoint.TABLET)`
    flex-direction: row;
     margin-top: 30px;
  `};
`;

export const P = styled.p`
  text-align: center;
  font-size: 23px;
  margin-top: 33px;
  color: #969696;
  ${media(Breakpoint.MOBILE)`
    margin-bottom: 0px;
    padding-bottom: 0px
  `};
  ${media(Breakpoint.TABLET)`
    margin-bottom: 55px;
  `};
`;

export const ButtonSection = styled.div`
  margin: 35px 0;
  display: flex;
  justify-content: center;
`;
