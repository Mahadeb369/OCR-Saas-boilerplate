import React from 'react';
import { H1, HeadingDiv, Image, Line, P, TextDiv } from './header.styles';

export const Header = () => {
  return (
    <div>
      <HeadingDiv>
        <TextDiv>
          <H1>OCR</H1>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nemo voluptate laudantium, id neque
            excepturi ea ex veritatis porro repudiandae quidem cumque quos, eligendi nulla praesentium molestiae eaque
            recusandae? Quod, aut nemo temporibus rerum possimus praesentium distinctio itaque nulla iste?
          </P>
        </TextDiv>
        <Image src="https://i.ibb.co/xDWyMPZ/ocr2.png"></Image>
      </HeadingDiv>
      <Line></Line>
    </div>
  );
};
