const HttpStatus = require('./HttpStatus');

class HttpResponse {
  constructor() {}

  ok({ res, data }) {
    res.status(HttpStatus.OK).json({ data });
  }

  created({ res, data }) {
    res.status(HttpStatus.CREATED).json({ data });
  }

  noContent({ res }) {
    res.status(HttpStatus.NO_CONTENT);
  }

  error({ res, error }) {
    const errorCode = res.status || HttpStatus.INTERNAL_SERVER_ERROR;

    res.status(errorCode).json({ error });
  }
}

module.exports = { HttpResponse };
