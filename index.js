const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

// API ENDPOINTS

const port = 3000

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)