const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
    res.send("oh ya")
})




module.exports = router;