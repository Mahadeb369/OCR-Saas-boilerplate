import styled from 'styled-components';
import { Breakpoint, media } from '../../../theme/media';

export const Image = styled.img`
  border-radius: 5px;

  ${media(Breakpoint.MOBILE)`
    width: 84vw
  `};
  ${media(Breakpoint.TABLET)`
    width: 440px;
  `};
`;

export const HeadingDiv = styled.div`
  margin: 0 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 40px;
  ${media(Breakpoint.MOBILE)`
    flex-direction: column
  `};
  ${media(Breakpoint.TABLET)`
    flex-direction: row
  `};
`;

export const TextDiv = styled.div``;

export const H1 = styled.p`
  font-size: 70px;
  font-weight: 700;
`;

export const P = styled.p`
  font-size: 10px;
`;

export const Line = styled.hr`
  height: 1px;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  margin-left: 30px;
  margin-right: 30px;
`;
