import React, { FC, useEffect, useState } from 'react';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import Rectangle from '../Rectangle/Rectangle.component';
import { ApiDataType } from '../OcrDemo.component';
import { Div } from './Canvas.styles';

// export interface CanvasDataType {

// }

const Canvas: FC<any> = ({ ocrData, setClickData, status }) => {
  const [imgLink, setImgLink] = useState('');
  const [img] = useImage(`http://127.0.0.1:8000/${imgLink}`);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v3')
      .then((res) => res.json())
      .then((data) => setImgLink(data[data.length - 1].file));
  }, [status.message]);
  console.log(typeof status, status);

  return (
    <Div>
      <Stage width={500} height={300}>
        <Layer>
          <Image image={img} height={300} width={600}></Image>
          {ocrData.map((item: any) => (
            <Rectangle key={item.id} item={item} setClickData={setClickData}></Rectangle>
          ))}
        </Layer>
      </Stage>
    </Div>
  );
};

export default Canvas;
