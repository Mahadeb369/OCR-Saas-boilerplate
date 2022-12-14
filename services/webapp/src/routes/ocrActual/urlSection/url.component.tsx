import { FC } from 'react';
import { Input } from '../../../shared/components/forms/input';
import { Heading, Logo, P, Container } from './url.styles';

export const Url: FC<any> = ({ setBase64Str }) => {
  const handleChange = async (e: any) => {
    const data = await fetch(e.target.value);
    const blob = await data.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      setBase64Str(reader.result);
    };
  };

  return (
    <Container>
      <Heading>
        <Logo src="https://i.ibb.co/1X42vhh/url.png" alt="" />
        <P>Via Url</P>
      </Heading>
      <Input onChange={handleChange}></Input>
    </Container>
  );
};
