import styled from 'styled-components';
import { Breakpoint, media } from '../../../theme/media';

export const Container = styled.div`
  ${media(Breakpoint.MOBILE)`
    padding: 30px 40px;
  `};
  ${media(Breakpoint.TABLET)`
    border-left: 1px solid black;
    padding: 0 40px;
  `};
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-bottom: 35px;
`;

export const P = styled.p`
  font-size: 15px;
`;

export const Logo = styled.img`
  width: 45px;
  border-radius: 100%;
`;
