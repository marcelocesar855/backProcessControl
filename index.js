const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
app.use(bodyParser.json())

// API ENDPOINTS

const port = 3000

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

app.use(routes)