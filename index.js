const express = require('express')
const app = express()
const PORT = 8000
// const cors = require('cors')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
// app.use(cors())

app.use('/categories', require('./controllers/categories'))
app.use('/transactions', require('./controllers/transactions'))

app.listen(PORT, () => {
    console.log(`DIY API running on port ${PORT}`)
})