

const path = require('path');
const AutoLoad = require('fastify-autoload');
const Loader = require('fastify-loader');

module.exports = (fastify, opts, next) => {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  // autoload services
  fastify.register(Loader, {
    paths: ['./services/**/*.js'], // A glob array
  });

  // Make sure to call next when done
  next();
};