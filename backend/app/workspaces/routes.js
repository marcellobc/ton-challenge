const router = require('express').Router();
const publicRoutes = require('./public/routes');

router.get('/', (req, res) => res.send({ working: true }));
router.use('/public', publicRoutes);

module.exports = router;
