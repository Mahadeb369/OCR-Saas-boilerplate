import { useState } from 'react';
import { Button } from '../../shared/components/forms/button';
import { ButtonSection, Container, Main, P } from './ocrActual.styles';
import { Canvas } from './Canvas';
import { SamplePicker } from './samplePickerSection';
import { Upload } from './uploadSection';
import { Url } from './urlSection';
import { Header } from './headerSection';

export const OcrActual = () => {
  const [base64Str, setBase64Str] = useState<''>('');
  const [ocrData, setOcrData] = useState<''>('');

  const handleSearch = (data: any) => {
    const request_json = {
      id: '42',
      inputs: [
        {
          name: 'IMAGE',
          shape: [1],
          datatype: 'BYTES',
          data: [data],
        },
      ],
      outputs: [
        {
          name: 'OCR',
        },
      ],
    };
    console.log(request_json);
  };

  return (
    <Container>
      <Header></Header>
      <P>Select an image</P>
      <Main>
        <Upload setBase64Str={setBase64Str}></Upload>
        <Url setBase64Str={setBase64Str}></Url>
      </Main>
      <SamplePicker setBase64Str={setBase64Str}></SamplePicker>
      <ButtonSection>
        <Button onClick={() => handleSearch(base64Str)}>Search</Button>
      </ButtonSection>
      {base64Str && <Canvas base64Str={base64Str}></Canvas>}
    </Container>
  );
};
