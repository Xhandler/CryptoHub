const coin = require('./scraper.js');

const uWsApi = {
  login: (data) => {
    console.log(data);
  },
  scrape: (data) => {
    return coin();
  }
};

module.exports = uWsApi;
