const router = require('express').Router();
const createUserContext = require('../lib/helpers').createUserContext;

router.get('/', async (req, res, next) => {
    let context = await createUserContext(req);
    res.render('home', context);
});

module.exports = router;