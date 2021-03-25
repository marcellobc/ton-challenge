const serverless = require('serverless-http');
const App = require('./start/App');

module.exports.handler = serverless(App);

// module.exports.handle = () => ({
//   statusCode: 200,
//   body: JSON.stringify({ message: 'iaewwwww, mané' }),
// });
