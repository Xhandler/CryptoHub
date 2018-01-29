const coin = require('./scraper.js');

const uWsApi = {
  login: (data) => {
    console.log(data);
  },
  scrape: (data) => {
    coin()
  }
};

module.exports = uWsApi;
