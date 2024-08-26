// Backend: controllers/reportController.js
const Bill = require('../models/Bill');
const { Op } = require('sequelize');

// Total sales within a specific date range
const getTotalSales = async (req, res) => {
    const { startDate, endDate } = req.query;

    try {
        const totalSales = await Bill.sum('totalAmount', {
            where: {
                date: {
                    [Op.between]: [new Date(startDate), new Date(endDate)],
                },
            },
        });

        res.status(200).json({ success: true, totalSales });
    } catch (error) {
        res.status(500).json({ error: 'Failed to calculate total sales', details: error });
    }
};

// Top-selling products within a specific date range
const getTopSellingProducts = async (req, res) => {
    const { startDate, endDate } = req.query;

    try {
        const bills = await Bill.findAll({
            where: {
                date: {
                    [Op.between]: [new Date(startDate), new Date(endDate)],
                },
            },
        });

        const productSales = {};

        bills.forEach((bill) => {
            bill.items.forEach((item) => {
                if (!productSales[item.name]) {
                    productSales[item.name] = 0;
                }
                productSales[item.name] += 
