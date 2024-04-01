// controllers/tradingQuotesController.js
const { fetchTradingQuotes, fetchFinancialMetrics } = require('../services/Stock');

const getTradingQuotes = async (req, res) => {
    try {
        const quotes = await fetchTradingQuotes();
        res.json({ message: "Trading quotes fetched successfully", quotes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// New controller function for fetching financial metrics
const getFinancialMetrics = async (req, res) => {
    try {
        const metrics = await fetchFinancialMetrics();
        res.json({ message: "Financial metrics fetched successfully", metrics });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    getTradingQuotes,
    getFinancialMetrics,
};
