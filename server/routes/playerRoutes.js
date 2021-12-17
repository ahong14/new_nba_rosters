const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/', playerController.getAllPlayers);
router.get('/activePlayers', playerController.getActivePlayers);
router.get('/team/:teamId', playerController.getPlayersByTeam);

module.exports = router;
