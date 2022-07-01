const express = require('express');
const router = express.Router();
const stuffCTRL = require('../controllers/stuff')

router.post('/', stuffCTRL.createThing);

router.delete('/:id', stuffCTRL.deleteThing);

router.put('/:id', stuffCTRL.updateThing);

router.get('/:id', stuffCTRL.getAllThings);

router.get('/', stuffCTRL.getOneThing);

module.exports = router;
