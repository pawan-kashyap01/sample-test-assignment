const mongoose = require("mongoose");

// if flag true then Employees can acccess /users routes
const AdminAccessEmp = new mongoose.Schema(
  {
    name:{
        type:String,
        unique: true,
        default: 'userAccess'
    },
    isAdminAccessEnabled:{
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("AdminAccessEmp", AdminAccessEmp);
