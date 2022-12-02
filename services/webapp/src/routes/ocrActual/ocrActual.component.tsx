import { Container } from './ocrActual.styles';
import { Canvas } from './Canvas';
import { SamplePicker } from './samplePickerSection';
import { Upload } from './uploadSection';
import { Url } from './urlSection';
import { Header } from './headerSection';

export const OcrActual = () => {
  return (
    <Container>
      <Header></Header>
      <div>
        <SamplePicker></SamplePicker>
        <Upload></Upload>
        <Url></Url>
      </div>
      <Canvas></Canvas>
    </Container>
  );
};
