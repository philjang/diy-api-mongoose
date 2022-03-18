// const express = require('express')
// const app = express()
// const PORT = 8000
// // const cors = require('cors')

// app.use(express.urlencoded({extended: false}))
// app.use(express.json())
// // app.use(cors())

// app.use('/categories', require('./controllers/categories'))
// app.use('/transactions', require('./controllers/transactions'))

// app.listen(PORT, () => {
//     console.log(`DIY API running on port ${PORT}`)
// })


const express = require('express')
// require('./models')
const app = express()
const PORT = 8080
// const cors = require('cors')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
// app.use(cors())

app.get('/', (req,res) => {
    res.json({msg: 'welcome to the blog API'})
})

app.use('/blogs', require('./controllers/blogs'))
app.use('/comments', require('./controllers/comments'))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})