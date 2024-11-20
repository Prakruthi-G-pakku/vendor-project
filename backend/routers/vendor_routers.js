const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendor_controllers');
router.post('/', vendorController.createvendor);
router.get('/', vendorController.getAllvendor);
router.get('/:id', vendorController.getvendorById);
router.put('/:id', vendorController.updatevendor);
router.delete('/:id', vendorController.deletevendor);

module.exports = router;