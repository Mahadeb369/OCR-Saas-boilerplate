import React, { FC } from 'react';
import { Container, P } from './ShowClickData.styles';

export type responseData = {
    clickData: string
}

const ShowClickData:FC<responseData> = ({ clickData }) => {
    
    return (
        <Container>
        <P>{clickData}</P>
        </Container>
    );
};

export default ShowClickData;