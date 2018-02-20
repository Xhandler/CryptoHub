const coin = require('./scraper.js');

const uWsApi = {
  login: (data) => {
    console.log(data);
  },
  scrape: (data) => {
    // Build a series of scraper functions
    // export them into a separate file
    // set a variable which captures the output of each function
    // Take that data and set it to an object which contains all links and titles from each website
    // return that value and port it to the frontend
    return coin();
  }
};

module.exports = uWsApi;
