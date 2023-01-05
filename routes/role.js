const {verifyTokenAndAdmin} = require("../middleware/verifyToken");
const { getAccess,createAccess, updateAccess, deleteAccess } = require('../controllers/role');
const router = require("express").Router();


router.route('/empaccess').post(verifyTokenAndAdmin, createAccess);
router.get('/empaccess',verifyTokenAndAdmin, getAccess);
router.put('/empaccess',verifyTokenAndAdmin, updateAccess);
router.delete('/empaccess',verifyTokenAndAdmin, deleteAccess);

module.exports = router;
