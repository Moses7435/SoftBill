const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('ShopBill API');
});

app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});