const server = require('./App');

const PORT = process.env.PORT || 3333;

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`running on port ${PORT}`));
