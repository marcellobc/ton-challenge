require('dotenv').config();
require('express-async-errors');

const express = require('express');
const routes = require('../app/workspaces/routes');

const errorHandler = require('../app/middlewares/errorHandler');

class App {
  constructor() {
    this.express = express();
    this.express.use(express.json());
    this.express.use(routes);
    this.express.use(errorHandler);
  }
}

module.exports = new App().express;
