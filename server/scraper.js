const cheerio = require('cheerio');
const fetch = require('node-fetch');
// handles variable casing for adding brand name to the dbcol-sm-6
const upperCase = (value) => {
	let result = "";
	for (let i = 0; i < value.length; i++) {
		var code = value.charCodeAt(i);
		if (i === 0 ||
			value[i - 1] === " " &&
			code >= 97 &&
			code <= 122) {
			result += String.fromCharCode(code - 32);
		} else {
			result += value[i];
		}
	}
	return result;
}
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
  $('h3 a.fade').each(function() {
    let link = $(this).attr('href');

    let title =  link.substr(25)//.split('-').join(" ");
    title = title.replace(/-|\//g, ' ');
    title = upperCase(title);
    console.log(title)
    pushLinkTitle.push({
      'link':link,
      'title':title
    });
  });
  coindeskScrape.coinDesk = pushLinkTitle;
  return coindeskScrape;
};

module.exports = coin;
