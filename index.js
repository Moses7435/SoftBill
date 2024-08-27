const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('ShopBill API');
});

app.use('/api', authRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
