import React, { FC } from 'react';
import { Input } from '../../../shared/components/forms/input';
import { Heading, Logo, P, Container } from './upload.styles';

export const Upload: FC<any> = ({ setBase64Str }) => {
  const handleSelectImage = (e: any) => {
    const img_file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img_file);
    reader.onload = () => {
      setBase64Str(reader.result);
    };
  };

  return (
    <Container>
      <Heading>
        <Logo src="https://i.ibb.co/2KrKVVV/upload.png" alt="" />
        <P>Via Upload</P>
      </Heading>
      <Input onChange={handleSelectImage} type="file" accept="image/*" />
    </Container>
  );
};
