const routes = require('./routes.js');

const start = function (app) {

    app.get('/', routes.home);

    app.get('/edit', routes.edit);

    app.get('/test', routes.test);
}

module.exports = start;