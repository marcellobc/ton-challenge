const HttpException = require('../exceptions/HttpException');

class ExceptionHelper {
  static throw(statusCode, message, occurrences) {
    throw new HttpException(statusCode, message, occurrences);
  }

  static internalServer(message = 'internal server error') {
    throw new HttpException(500, message);
  }

  static forbidden(message = 'user is not allowed to access this resource') {
    throw new HttpException(403, message);
  }

  static notFound(occurrences) {
    throw new HttpException(404, 'resource was not found', occurrences);
  }

  static badRequest(message = 'bad request', occurrences) {
    throw new HttpException(400, message, occurrences);
  }
}

module.exports = ExceptionHelper;
