const axios = require('axios');
const cheerio = require('cheerio');

const URLTRADINGQUOTE = 'https://www.stockexchangeofmauritius.com/products-market-data/equities-board/trading-quotes/official';
const URLTRADINGDATA = 'https://www.stockexchangeofmauritius.com/products-market-data/equities-board/trading-data/official';

const fetchTradingQuotes = async () => {
    try {
        const response = await axios.get(URLTRADINGQUOTE);
        const html = response.data;
        const $ = cheerio.load(html);
        const quotes = [];

        $('.main-table tbody tr').each((index, element) => {
            const tds = $(element).find('td, th.fixed-side');
            const quote = {
                company: $(tds[0]).text().trim(),
                currency: $(tds[1]).text().trim(),
                trend: $(tds[2]).find('div').attr('class') ? $(tds[2]).find('div').attr('class').split(' ')[1] : '', 
                lastClosingPrice: $(tds[3]).text().trim(),
                latest: $(tds[4]).text().trim(),
                change: $(tds[5]).text().trim(),
                percentChange: $(tds[6]).text().trim(),
                volume: $(tds[7]).text().trim(),
                value: $(tds[8]).text().trim(),
                closingVWAP: $(tds[9]).text().trim(),
                companySnapshotLink: $(tds[10]).find('a').attr('href'),
            };
            quotes.push(quote);
        });

        return quotes;
    } catch (error) {
        console.error('Error fetching trading quotes:', error);
        throw new Error('Failed to fetch trading quotes');
    }
};


const fetchFinancialMetrics = async () => {
    try {
        const response = await axios.get(URLTRADINGDATA);
        const html = response.data;
        const $ = cheerio.load(html);
        const financialMetrics = [];

        $('.main-table tbody tr').each((index, element) => {
            const tds = $(element).find('td, th.fixed-side');
            const metric = {
                company: $(tds[0]).text().trim(),
                currency: $(tds[1]).text().trim(),
                yearHigh: $(tds[2]).text().trim(),
                yearLow: $(tds[3]).text().trim(),
                eps: $(tds[4]).text().trim(),
                dps: $(tds[5]).text().trim(),
                nav: $(tds[6]).text().trim(),
                per: $(tds[7]).text().trim(),
                dy: $(tds[8]).text().trim(),
                priceToNAV: $(tds[9]).text().trim(),
                evEbitda: $(tds[10]).text().trim(),
            };
            financialMetrics.push(metric);
        });

        return financialMetrics;
    } catch (error) {
        console.error('Error fetching financial metrics:', error);
        throw new Error('Failed to fetch financial metrics');
    }
};

module.exports = {
    fetchTradingQuotes,
    fetchFinancialMetrics,
};
