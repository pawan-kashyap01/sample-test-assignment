const AdminAccessEmp = require("../models/AdminAccessEmp");
const catchAsyncErr = require("../middleware/catchAsyncError");


exports.createAccess = catchAsyncErr(async (req, res, next) => {
    const newAdminflag = new AdminAccessEmp(req.body);
    const adminflag = await newAdminflag.save();
    res.status(200).json(adminflag);
});


exports.deleteAccess = catchAsyncErr(async (req, res, next) => {
  await AdminAccessEmp.findByIdAndDelete(req.params.id);
  res.status(200).json("deleted successfully.");
});

exports.updateAccess = catchAsyncErr(async (req, res, next) => {
    let accessFlag = await AdminAccessEmp.findOneAndUpdate({name:'userAccess'}, {isAdminAccessEnabled: req.body.allowAccess},{new:true});
    res.status(200).json(accessFlag.isAdminAccessEnabled ? 'Employess have been given access to manage users.' : 'Employees access to manage Users revoked.');
});


exports.getAccess = catchAsyncErr(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json(users);
});
