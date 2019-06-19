export default class BeerSchema {
  static schema = {
    name: 'Beer',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
      description: 'string',
      type: 'string',
      family: 'string',
    },
  };
}
