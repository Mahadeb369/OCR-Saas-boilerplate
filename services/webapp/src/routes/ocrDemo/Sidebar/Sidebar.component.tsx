import React, { FC, useContext, useState } from 'react';
import { Button } from '../../../shared/components/forms/button';
import { Container, Form, Input } from './Sidebar.styles';

const Sidebar: FC<any> = ({ setStatus }) => {
  const [image, setImage] = useState<any>({});
  const [base64Str, setBase64Str] = useState<any>('');

  const handleSelectImage = (e: any) => {
    const img_file = e.target.files[0];
    setImage(img_file);
    const reader = new FileReader();
    reader.readAsDataURL(img_file);
    reader.onload = () => {
      setBase64Str(reader.result);
    };
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', image);

    const request_json = {
      id: '42',
      inputs: [
        {
          name: 'IMAGE',
          shape: [1],
          datatype: 'BYTES',
          data: [base64Str],
        },
      ],
      outputs: [
        {
          name: 'OCR',
        },
      ],
    };
    console.log('Inside submit', base64Str);
    console.log(request_json);

    fetch('http://127.0.0.1:8000/api/v3', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setStatus(data));
  };

  console.log('outside', base64Str);

  return (
    <Container>
      <Form
      // onSubmit={handleSubmit}
      >
        <Input onChange={handleSelectImage} type="file" accept="image/*" name="myimg" required />
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
};

export default Sidebar;
