const express = require('express');

const router = express.Router();

const SkillsCtrl = require('../controllers/Skills');

// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');

//router user 

router.get('/', SkillsCtrl.getAllSkills);

module.exports = router;