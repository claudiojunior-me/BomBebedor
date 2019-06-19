import Realm from 'realm';
import BeerSchema from '~/schemas/BeerSchema';

export default function getRealm() {
  return Realm.open({
    schemaVersion: 1,
    schema: [BeerSchema],
  });
}
