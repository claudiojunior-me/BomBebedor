import React, { useState, useEffect } from 'react';
import getRealm from '~/services/realm';
import { Container, Title, List } from './styles';

import BeerCard from '~/components/BeerCard';

const Main = () => {
  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    async function loadBeerData() {
      const realm = await getRealm();
      console.tron.log(realm.path);

      const data = realm.objects('Beer').sorted('type', false);
      setBeerData(data);
    }

    loadBeerData();
  }, []);

  return (
    <Container>
      <Title>Lista de Cervejas</Title>

      <List
        keyboardShouldPersistTaps="handled"
        data={beerData}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <BeerCard data={item} />}
      />
    </Container>
  );
};

export default Main;
