import React from 'react';
import { Input } from '../../../shared/components/forms/input';
import { Heading, Logo, P, Container } from './url.styles';

export const Url = () => {
  return (
    <Container>
      <Heading>
        <Logo src="https://i.ibb.co/1X42vhh/url.png" alt="" />
        <P>Via Url</P>
      </Heading>
      <Input></Input>
    </Container>
  );
};
