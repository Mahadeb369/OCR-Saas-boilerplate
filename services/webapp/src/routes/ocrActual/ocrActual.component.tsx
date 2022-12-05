import { Button } from '../../shared/components/forms/button';
import { ButtonSection, Container, Main, P } from './ocrActual.styles';
import { Canvas } from './Canvas';
import { SamplePicker } from './samplePickerSection';
import { Upload } from './uploadSection';
import { Url } from './urlSection';
import { Header } from './headerSection';

export const OcrActual = () => {
  return (
    <Container>
      <Header></Header>
      <P>Select an image</P>
      <Main>
        <Upload></Upload>
        <Url></Url>
      </Main>
      <SamplePicker></SamplePicker>
      <ButtonSection>
        <Button>Search</Button>
      </ButtonSection>
      <Canvas></Canvas>
    </Container>
  );
};
