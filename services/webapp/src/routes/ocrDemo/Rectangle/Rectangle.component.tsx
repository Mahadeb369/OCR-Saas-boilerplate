import React, { FC } from 'react';
import { Rect } from 'react-konva';

const Rectangle: FC<any> = ({ item, setClickData }) => {
  const { value, rectangle } = item;
  const { x, y } = rectangle;

  const handleMouseHover = (data: string) => {
    setClickData(data);
  };
  return (
    <Rect
      onMouseEnter={() => handleMouseHover(value)}
      x={parseInt(x)}
      y={parseInt(y)}
      width={100}
      height={50}
      // fill="red"
      stroke="black"
      shadowBlur={10}
    />
  );
};

export default Rectangle;
