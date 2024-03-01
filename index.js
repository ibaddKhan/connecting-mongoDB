const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})
// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})