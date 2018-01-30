const cheerio = require('cheerio');
const fetch = require('node-fetch');

async function coin() {
const searchUrl = `https://www.coindesk.com`;
const response = await fetch(searchUrl, {
  mode: 'no-cors'
});
const htmlString = await response.text();
const $ = cheerio.load(htmlString);
let coindeskScrape = {};
let pushLink = [];
let pushTitle = [];
$('.fade').each(function() {
let link = $(this).attr('href');
let title = $(this).attr('title');

if(pushLink.includes(link) === false) {
  pushLink.push(link);
}
if(pushTitle.includes(title) === false) {
  pushTitle.push(title);
}
})
coindeskScrape.link = pushLink;
coindeskScrape.title = pushTitle;
console.log(coindeskScrape)
};

module.exports = coin;
