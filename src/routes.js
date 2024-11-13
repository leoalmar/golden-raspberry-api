const express = require('express');
const producersRoutes = require('./routes/producers');
const moviesRoutes = require('./routes/movies');

const router = express.Router();

router.use(producersRoutes);
router.use(moviesRoutes);

module.exports = router;
