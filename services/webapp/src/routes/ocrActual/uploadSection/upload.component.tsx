import React from 'react';
import { Input } from '../../../shared/components/forms/input';
import { Heading, Logo, P, Container } from './upload.styles';

export const Upload = () => {
  return (
    <Container>
      <Heading>
        <Logo src="https://i.ibb.co/2KrKVVV/upload.png" alt="" />
        <P>Via Upload</P>
      </Heading>
      <Input type="file"></Input>
    </Container>
  );
};
