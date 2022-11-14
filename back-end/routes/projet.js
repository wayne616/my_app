const express = require('express');

const router = express.Router();

const projetCtrl = require('../controllers/projet');

// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');

//router user 

router.get('/', projetCtrl.getAllProjet);

module.exports = router;