const coin = require('./scraper.js');

const uWsApi = {
  login: (data) => {
    console.log(data);
  },
  scrape: (data) => {
    // a = coindeskScrape
    // a.(INSERT WEBSITE SCRAPE HERE)
    // let a = coin();
    // let a.somewebsite = otherscrapefunction();
    return coin();
  }
};

module.exports = uWsApi;
