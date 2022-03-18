// const mongoose = require('mongoose')

// const transactionSchema = new mongoose.Schema({
//     amount: {
//         type: Number,
//         required: true
//     },
//     merchant: {
//         type: String,
//         required: true
//     },
//     note: {
//         type: String,
//         default: "no details specified for transaction"
//     },
//     date: {
//         type: Date,
//         default: new Date()
//     }
// },{timestamps: true})

// const categorySchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     max: {
//         type: Number,
//         required: true
//     },
//     description: {
//         type: String
//     },
//     transactions: [transactionSchema]
// },{timestamps: true})

// module.exports = mongoose.model('Category', categorySchema)