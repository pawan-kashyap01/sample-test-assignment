const User = require("../models/User");
const catchAsyncErr = require("../middleware/catchAsyncError");

//Update a user -Admin
exports.updateUser = catchAsyncErr(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).json(updatedUser);
});

//DELETE
exports.deleteUser = catchAsyncErr(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json("User has been deleted...");
});

//GET USER
exports.getUser = catchAsyncErr(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  const { password, ...others } = user._doc;
  res.status(200).json(others);
});

//GET ALL USER
exports.getAllUsers = catchAsyncErr(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json(users);
});
