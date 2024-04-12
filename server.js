const express = require('express');
const app = express();
const PORT = 3000;

const products = [
    {id: 1, prod_name: 'comb', price: 59.99},
    {id: 2, prod_name: 'shampoo', price: 109.99},
    {id: 3, prod_name: 'spray', price: 88.99},
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(prod => prod.id === productId);

    if (product) {
        res.json(product)
    } else {
        res.status(404).send('Product not found');
    }
});

app.get('/products/name/:name', (req, res) => {
    const product_name = req.params.prod_name;
    const product = products.find(prod => prod.prod_name.toLowerCase() == product_name.toLowerCase());

    if (product) {
        res.json(product)
    } else {
        res.status(404).send('Product not found');
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})