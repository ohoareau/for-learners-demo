const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
const port = 3001

app.get('/transactions', (req, res) => {
    res.json([
        {date: 1621400096394, amount: 12.50, currency: 'EUR', location: 'Burger King - Paris', bank: 'BNP Paribas'},
        {date: 1621403696394, amount: 12.50, currency: 'EUR', location: 'Burger King - Paris', bank: 'BNP Paribas'},
        {date: 1621407296394, amount: 12.50, currency: 'EUR', location: 'Burger King - Paris', bank: 'BNP Paribas'},
        {date: 1621410896394, amount: 12.50, currency: 'EUR', location: 'Burger King - Paris', bank: 'BNP Paribas'},
        {date: 1621410896394, amount: 12.50, currency: 'EUR', location: 'Burger King - Paris', bank: 'BNP Paribas'},
        {date: 1621410896394, amount: 12.50, currency: 'EUR', location: 'Burger King - Paris', bank: 'BNP Paribas'},
        {date: 1621410896394, amount: 12.50, currency: 'EUR', location: 'Burger King - Paris', bank: 'BNP Paribas'},
        {date: 1621410896394, amount: 12.50, currency: 'EUR', location: 'Burger King - Paris', bank: 'BNP Paribas'},
        {date: 1621410896394, amount: 12.50, currency: 'EUR', location: 'Burger King - Paris', bank: 'BNP Paribas'},
        {date: 1621410896394, amount: 12.50, currency: 'USD', location: 'Burger King - Paris', bank: 'BNP Paribas'},
    ].filter(() => {
        return (Math.random() * 10) > 5;
    }))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
