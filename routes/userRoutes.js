const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserById);
router.post('/', userController.createUser);
router.patch('/:userId', userController.updateUserPartially);
router.put('/:userId', userController.updateUserCompletely);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
