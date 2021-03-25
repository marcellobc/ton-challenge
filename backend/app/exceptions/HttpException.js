class HttpException {
  constructor(
    statusCode = 500,
    message = 'internal server error',
    occurrences = null
  ) {
    this.message = message;
    this.statusCode = statusCode;
    this.occurrences = occurrences;
  }
}

module.exports = HttpException;
