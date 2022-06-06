const router = require('express').Router();
const cubeService = require('../services/cubeService.js');

// exports.index = (req, res) => {
//     res.render('index', { cubes });
// }
router.get('/', (req, res) => {
    let { search, from, to } = req.query;

    const cubes = cubeService.getAll(search, from, to);

    res.render('index', { cubes });
});

router.get = ('/about', (req, res) => {
    res.render('about');
});

module.exports = router;