const express = require('express');
const router = express.Router();
const houseController = require('../controllers/houseController');

router.get('/:userId/houses', houseController.getAllHouses);
router.get('/:userId/houses', houseController.getHousesWithFilters);
router.post('/:userId/houses', houseController.createHouse);
router.put('/:userId/houses/:houseId', houseController.updateHouse);
router.delete('/:userId/houses/:houseId', houseController.deleteHouse);

module.exports = router;
