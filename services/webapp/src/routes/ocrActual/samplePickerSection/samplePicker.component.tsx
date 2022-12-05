import React from 'react';
import { border } from '../../../theme';
import { Heading, Logo, P, SampleImage, Samples } from './samplePicker.styles';

export const SamplePicker = () => {
  return (
    <div>
      <Heading>
        <Logo src="https://i.ibb.co/XLT3D08/samples.png" alt="" />
        <P>Via Samples</P>
      </Heading>
      <Samples>
        <SampleImage src="https://i.ibb.co/4KcvbMQ/sample-1.png"></SampleImage>
        <SampleImage src="https://i.ibb.co/0rcbsGH/sample-3.png"></SampleImage>
        <SampleImage src="https://i.ibb.co/Fn5MtmF/sample-2.png"></SampleImage>
      </Samples>
    </div>
  );
};
