import React from 'react';

// Components
import Aside from '../../components/Aside'
import Map from '../../components/Map'

import { Container } from './styles';


export default function Main() {
  return (
    <Container>
        <Aside />
        <Map />
    </Container>
  );
}
