const login = require('./api/login');
const accounts = require('./api/accounts');
const document = require('./api/document');
const billing = require('./api/billing');
const search = require('./api/search');
const StrongDoc = require('./client/strongDoc');

module.exports = {
  auth: login,
  accounts,
  document,
  billing,
  search,
  StrongDoc
}