const {verifyTokenAndUserRouteAccess} = require("../middleware/verifyToken");
const { getUser,getAllUsers, updateUser, deleteUser } = require('../controllers/user');
const router = require("express").Router();

router.get("/:id" , verifyTokenAndUserRouteAccess , getUser);
router.get("/" , verifyTokenAndUserRouteAccess , getAllUsers);
router.put("/:id" , verifyTokenAndUserRouteAccess , updateUser);
router.delete("/:id" , verifyTokenAndUserRouteAccess , deleteUser);

module.exports = router;
