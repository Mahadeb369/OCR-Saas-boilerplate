import { FC } from 'react';
import { Heading, Logo, P, SampleImage, Samples } from './samplePicker.styles';

export const SamplePicker: FC<any> = ({ setBase64Str }) => {
  const handleClick = async (e: any) => {
    const data = await fetch(e.target.src);
    const bolb = await data.blob();
    const reader = new FileReader();
    reader.readAsDataURL(bolb);
    reader.onload = () => {
      setBase64Str(reader.result);
    };
  };

  return (
    <div>
      <Heading>
        <Logo src="https://i.ibb.co/XLT3D08/samples.png" alt="" />
        <P>Via Samples</P>
      </Heading>
      <Samples>
        <SampleImage onClick={handleClick} src="https://i.ibb.co/4KcvbMQ/sample-1.png"></SampleImage>
        <SampleImage onClick={handleClick} src="https://i.ibb.co/0rcbsGH/sample-3.png"></SampleImage>
        <SampleImage onClick={handleClick} src="https://i.ibb.co/Fn5MtmF/sample-2.png"></SampleImage>
      </Samples>
    </div>
  );
};
