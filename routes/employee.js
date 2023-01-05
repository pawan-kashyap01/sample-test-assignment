const {verifyTokenAndEmployee} = require("../middleware/verifyToken");
const router = require("express").Router();


router.get("/",verifyTokenAndEmployee, async (req, res) => {
    res.status(200).json({message: "Welcome Employee "})
  });

router.post("/",verifyTokenAndEmployee, async (req, res) => {
    res.status(200).json({message: "Welcome Employee."})
  });

router.put("/:id", verifyTokenAndEmployee, async (req, res) => {
    res.status(200).json({message: "Welcome Employee. "})
  });

module.exports = router;
