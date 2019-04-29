const Fastify = require('fastify');
const should = require('should');
const Support = require('../../plugins/support');

describe('support plugin', () => {
  it('works standalone', async () => {
    const fastify = Fastify();
    fastify.register(Support);
    await fastify.ready();

    should(fastify.someSupport()).be.eql('hugs');
  });
});
