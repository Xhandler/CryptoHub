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
  let pushLinkTitle = [];
  $('.fade').each(function() {
    let link = $(this).attr('href');
    let title = $(this).attr('title');
      pushLinkTitle.push({
        'link':link,
        'title':title
      });
  });
  coindeskScrape.linkTitle = pushLinkTitle;
  return coindeskScrape;
};

module.exports = coin;
