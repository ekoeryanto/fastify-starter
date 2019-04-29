const should = require('should');
const { build } = require('../helper');

describe('About Service', () => {
  let app = build();

  before(() => {
    app = app || build();
  });

  it('response with success code', async () => {
    const about = await app.inject({
      url: '/about',
    });

    should(about.statusCode).be.exactly(200);
    should(JSON.parse(about.payload))
      .be.have.properties('name', 'version');
  });
});
