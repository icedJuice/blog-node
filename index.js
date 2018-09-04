
const Server = require('./src/server/index.js')
const dbs = require('./src/db/index.js')

Server();
dbs.createMongos();

console.info('successed run it with exit code ' + 200);