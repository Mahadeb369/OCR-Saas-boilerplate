import React, { FC } from 'react';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import { Container } from './canvas.styles';

export const Canvas: FC<any> = ({ base64Str }) => {
  const [img] = useImage(base64Str);

  return (
    <Container>
      <Stage style={{ border: `2px solid black` }} width={512} height={350}>
        <Layer>
          <Image image={img} height={350} width={512}></Image>
        </Layer>
      </Stage>
    </Container>
  );
};
