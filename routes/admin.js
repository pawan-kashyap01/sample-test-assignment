const {verifyTokenAndAdmin} = require("../middleware/verifyToken");
const router = require("express").Router();


router.get("/",verifyTokenAndAdmin, async (req, res) => {
    res.status(200).json({message: "Welcome Admin."})
  });

router.post("/",verifyTokenAndAdmin, async (req, res) => {
    res.status(200).json({message: "Welcome Admin."})
  });

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    res.status(200).json({message: "Welcome Admin."})
  });

module.exports = router;
