const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World -7376222IT210 -NAVEEN KUMAR P'))
app.get('/naveenkumar', (req, res) => res.send('7376222IT210 -NAVEEN KUMAR P'))
app.get('/manikandan', (req, res) => res.send('7376222IT192 -MANIKANDAN G'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))