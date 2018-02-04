const cheerio = require('cheerio');
const fetch = require('node-fetch');

const coin = async () => {
  console.log(`Coindesk scrape initiate`);
  const searchUrl = `https://www.coindesk.com`;
  const response = await fetch(searchUrl, {
    mode: 'no-cors'
  });
  const htmlString = await response.text();
  const $ = cheerio.load(htmlString);
  let coindeskScrape = {event: 'scrape'};
  let pushLink = [];
  let pushTitle = [];
  $('.fade').each(function() {
    let link = $(this).attr('href');
    let title = $(this).attr('title');
    if (pushLink.includes(link) === false && pushTitle.includes(title) === false) {
      pushLink.push(link);
      pushTitle.push(title);
    }
  });
  if(!coindeskScrape.link && !coindeskScrape.title ) {
    coindeskScrape.link = pushLink;
    coindeskScrape.title = pushTitle;
  };
  return coindeskScrape;
};

module.exports = coin;
