import styled from 'styled-components';
import { Breakpoint, media } from '../../../theme/media';

export const Heading = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: row;
  gap: 12px;
  margin: 40px 0;
  ${media(Breakpoint.MOBILE)`
    justify-content: baseline;
    padding: 0 40px;
  `};
  ${media(Breakpoint.TABLET)`
    justify-content: center;
    padding: 0px
  `};
`;

export const P = styled.p`
  font-size: 15px;
`;

export const Logo = styled.img`
  width: 45px;
  border-radius: 100%;
`;

export const Samples = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  ${media(Breakpoint.MOBILE)`
    flex-direction: column;
  `};
  ${media(Breakpoint.TABLET)`
    flex-direction: row;
  `};
`;

export const SampleImage = styled.img`
  border: 1px solid black;
  ${media(Breakpoint.MOBILE)`
    width: 70%;
  `};
  ${media(Breakpoint.TABLET)`
    width: 250px;
  `};
`;
