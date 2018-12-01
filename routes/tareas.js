const express = requiere ('express');
const router = express.router();
router.get('/', function(req, res, next){
    res.render('index');
})
module.exports = router;