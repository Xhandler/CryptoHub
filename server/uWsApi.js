const coin = require('./scraper.js');
const r = require('rethinkdb');

const uWsApi = {
  login: (data) => {
    console.log(data);
  },
  scrape: (data) => {
    return coin();
  }
};

module.exports = uWsApi;
