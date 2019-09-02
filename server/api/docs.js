const router = require('express').Router()
const {User, Doc} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const docs = await Doc.findAll()
    res.json(docs)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId/:docname', async (req, res, next) => {
  try {
    //find or create document
    const doc = await Doc.findOrCreate({
      where: {userId: req.params.userId, docname: req.params.docname}
    })
    res.status(200)
  } catch (error) {
    next(error)
  }
})
