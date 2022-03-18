// const db = require('../models')
// const router = require('express').Router()

// router.put('/:id', async (req, res) => {
//     try {
//         const foundCategory = await db.Category.findOne({
//             'transactions._id': req.params.id
//         })
//         // console.log(foundCategory)
//         const foundTransaction = foundCategory.transactions.id(req.params.id)
//         foundTransaction.set(req.body)
//         await foundCategory.save()
//         if(!foundTransaction) return res.status(404).json({message: 'invalid category id'})
//         res.json(foundTransaction)
//     } catch (err) {
//         console.log(err)
//         res.status(503).json({message: 'server error trying to put transaction'})
//     }
// })

// router.delete('/:id', async (req, res) => {
//     try {
//         const foundCategory = await db.Category.findOne({
//             'transactions._id': req.params.id
//         })
//         foundCategory.transactions.id(req.params.id).remove()
//         await foundCategory.save()
//         if(!foundCategory) return res.status(404).json({message: 'invalid category id'})
//         res.json(foundCategory)
//     } catch (err) {
//         console.log(err)
//         res.status(503).json({message: 'server error trying to delete transaction'})
//     }
// })

// module.exports = router