const express = require('express');
const router = express.Router();
const tradingQuotesController = require('../controllers/Stock');

/**
 * @swagger
 * tags:
 *   name: TradingQuotes
 *   description: Trading quotes fetching endpoints
 */

/**
 * @swagger
 * /api/stocks/official:
 *   get:
 *     tags: [TradingQuotes]
 *     summary: Fetch trading quotes
 *     description: Retrieves trading quotes from the specified source.
 *     responses:
 *       200:
 *         description: Trading quotes fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 quotes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       company:
 *                         type: string
 *                       currency:
 *                         type: string
 *                       trend:
 *                         type: string
 *                       lastClosingPrice:
 *                         type: string
 *                       latest:
 *                         type: string
 *                       change:
 *                         type: string
 *                       percentChange:
 *                         type: string
 *                       volume:
 *                         type: string
 *                       value:
 *                         type: string
 *                       closingVWAP:
 *                         type: string
 *                       companySnapshotLink:
 *                         type: string
 *       500:
 *         description: Error fetching trading quotes
 */

router.get('/official', tradingQuotesController.getTradingQuotes);

/**
 * @swagger
 * /api/stocks/metrics:
 *   get:
 *     tags: [TradingQuotes]
 *     summary: Fetch financial metrics
 *     description: Retrieves financial metrics for listed companies from the specified source.
 *     responses:
 *       200:
 *         description: Financial metrics fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 metrics:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       company:
 *                         type: string
 *                       currency:
 *                         type: string
 *                       yearHigh:
 *                         type: string
 *                       yearLow:
 *                         type: string
 *                       eps:
 *                         type: string
 *                       dps:
 *                         type: string
 *                       nav:
 *                         type: string
 *                       per:
 *                         type: string
 *                       dy:
 *                         type: string
 *                       priceToNAV:
 *                         type: string
 *                       evEbitda:
 *                         type: string
 *       500:
 *         description: Error fetching financial metrics
 */

router.get('/metrics', tradingQuotesController.getFinancialMetrics);



module.exports = router;
