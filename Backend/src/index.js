require('dotenv').config();

const app = require('./app');
require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}


var os = require("os");
var ifaces = os.networkInterfaces();
console.log(ifaces);
main();
