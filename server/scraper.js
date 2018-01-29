const cheerio = require('cheerio');
const fetch = require('node-fetch');

async function coin() {
const searchUrl = `https://www.coindesk.com`;
const response = await fetch(searchUrl, {
  mode: 'no-cors'
});
const htmlString = await response.text();
const $ = cheerio.load(htmlString);
let coindeskScrape = [{
  links: {},
  titles: {}
}];
$('.fade').each( function () {
let link = $(this).attr('href');
let title = $(this).attr('title');

coindeskScrape[0].links.push(link);
// coindeskScrape['title'].push({'title':title});

// return JSON.stringify(coindeskScrape);
})
};

module.exports = coin;
