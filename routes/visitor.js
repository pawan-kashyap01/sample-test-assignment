const router = require("express").Router();


router.get("/", async (req, res) => {
  res.status(200).json({message: "Welcome Visitor. "})
});


module.exports = router;
