const {verifyTokenAndManager} = require("../middleware/verifyToken");
const router = require("express").Router();


router.get("/",verifyTokenAndManager, async (req, res) => {
    res.status(200).json({message: "Welcome Manager "})
  });

router.post("/",verifyTokenAndManager, async (req, res) => {
    res.status(200).json({message: "Welcome Manager."})
  });

router.put("/:id", verifyTokenAndManager, async (req, res) => {
    res.status(200).json({message: "Welcome Manager. "})
  });

module.exports = router;
