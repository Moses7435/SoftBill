const Bill = require('../models/Bill');

exports.createBill = async (req, res) => {
    try {
        const { billNumber, customerName, customerDetails, products, totalAmount, discount } = req.body;

        const newBill = await Bill.create({
            billNumber,
            customerName,
            customerDetails,
            products,
            totalAmount,
            discount
        });

        res.status(201).json(newBill);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create bill' });
    }
};
