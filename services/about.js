/// <reference types="fastify"/>
/// <reference types="fastify-loader"/>

const {
  name, description, version, author,
} = require('../package');

function handler(request, reply) {
  reply.send({
    name, description, version, author,
  });
}

fastify.route({
  url: '/about',
  method: 'GET',
  handler,
});
