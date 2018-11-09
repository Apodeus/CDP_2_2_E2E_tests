let express = require("express");
let router = express.Router();

router.get("/", function(req,res, next){
    res.write("mes projets:");
    res.end();
});
module.exports = router;
