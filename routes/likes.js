const express = require('express')
const router = express.Router()
const { getAllLikes, getLikeForSinglePost, addLike, deleteLike } = require('../db/queries/likesQueries.js')

router.get('/', getAllLikes)
router.get('/posts/:id', getLikeForSinglePost)
router.post('/posts/:id', addLike)
router.delete('/:id', deleteLike)

module.exports = router
