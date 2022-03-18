// const db = require('../models')
// const router = require('express').Router()

// router.get('/', (req,res) => {
//     db.Category.find({})
//         .then(categories => {
//             res.json(categories)
//         })
//         .catch(err => {
//             console.error(err)
//             res.status(503).json({message: 'server error trying to get /categories'})
//         })
// })

// router.get('/:id', (req,res) => {
//     db.Category.findById(req.params.id)
//         .then(foundCategory => {
//             if (!foundCategory) return res.status(404).json({message: 'category not found'})
//             res.json(foundCategory)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(503).json({message: 'server error trying to get /categories/:id'})
//         })
// })

// router.post('/', (req,res) => {
//     db.Category.create(req.body)
//         .then(createdCategory => {
//             res.status(201).json(createdCategory)
//         })
//         .catch(err => {
//             console.log(err)
//             if(err.name === 'ValidationError') {
//                 res.status(406).json({message: 'Validation Error'})
//             } else {
//                 res.status(503).json({message: 'Database or server error'})
//             }
//         })
// })

// router.put('/:id', (req,res) => {
//     db.Category.findOneAndUpdate({
//         _id: req.params.id
//     },req.body ,{new: true})
//         .then(updatedCategory => {
//             if(!updatedCategory) return res.status(404).json({message: 'invalid id'})
//             res.json(updatedCategory)
//         })
//         .catch(err=> {
//             console.log(err)
//             res.status(503).json({message: 'server error trying to put /categories/:id'})
//         })
// })

// router.delete('/:id', (req,res) => {
//     db.Category.findByIdAndDelete(req.params.id)
//         .then(() => {
//             res.status(204).json({message: 'category deleted'})
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(503).json({message: 'server error trying to delete /categories/:id'})
//         })
// })

// router.post('/:id/transactions', async (req,res) => {
//     try {
//         const foundCategory = await db.Category.findById(req.params.id)
//         foundCategory.transactions.push(req.body)
//         await foundCategory.save()
//         res.status(201).json(foundCategory)
//     } catch (err) {
//         console.log(err)
//         if(err.name === 'ValidationError') {
//             res.status(406).json({message: 'Validation Error'})
//         } else {
//             res.status(503).json({message: 'server error trying to post transaction'})
//         }
//     }
// })

// module.exports = router