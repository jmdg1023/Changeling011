const router = require('express').Router();
const notesR = require('./notesR')

router.use(notesR);

module.exports = router;