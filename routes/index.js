const router = require("express").Router;

router.get("/", (req,res)=> {
    res.send("Hello, bois!")
});

module.exports = router;