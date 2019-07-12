

//Dependencies
const express = require('express')
const controller = require('../controller')

const router = express.Router()

router.get('/:shortId',controller.serveUrl)
router.post('/api/create',controller.createUrl)

module.exports  = router;
