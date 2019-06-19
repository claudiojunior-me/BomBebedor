import React from 'react';

import { Container, Description, Name } from './styles';

const BeerCard = ({ data }) => (
  <Container>
    <Name>{data.name}</Name>
    <Description>{data.description}</Description>
  </Container>
);

export default BeerCard;
