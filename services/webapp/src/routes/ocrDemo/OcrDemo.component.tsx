import React, { FC, useEffect, useState } from 'react';
import { H1 } from '../../theme/typography';
import Canvas from './Canvas/Canvas.componenet';
import { Container, Section } from './OcrDemo.styles';
import ShowClickData from './ShowClickData/ShowClickData.component';
import Sidebar from './Sidebar/Sidebar.component';

export interface ApiDataType {
  id: string;
  rectangle: {
    x: string;
    y: string;
  };
  value: string;
}

export interface StatusDataType {
  message: string;
}

const OcrDemo: FC<any> = () => {
  const [ocrData, setOcrData] = useState<ApiDataType[]>([]);
  const [clickData, setClickData] = useState<string>('');
  const [status, setStatus] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/ocr')
      .then((response) => response.json())
      .then((data) => {
        setOcrData(data);
      });
  }, []);

  console.log(typeof ocrData, ocrData);

  return (
    <Container>
      <h1>OCR Demo in SaaS</h1>
      <Section>
        <Sidebar setStatus={setStatus}></Sidebar>
        <Canvas ocrData={ocrData} setClickData={setClickData} status={status}></Canvas>
        <ShowClickData clickData={clickData}></ShowClickData>
      </Section>
    </Container>
  );
};

export default OcrDemo;
