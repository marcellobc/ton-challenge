const HttpException = require('../exceptions/HttpException');

// eslint-disable-next-line no-unused-vars
function handle(error, req, res, next) {
  return error instanceof HttpException
    ? res.status(error.statusCode).json(error)
    : res.status(500).json(new HttpException(500, error.message));
}

module.exports = handle;
