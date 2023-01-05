const jwt = require("jsonwebtoken");
const AdminAccessEmp = require("../models/AdminAccessEmp");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(401).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === 0 ) {
      next();
    } else {
      res.status(401).json("You are not allowed to do that!");
    }
  });
};

const verifyTokenAndManager = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role <= 1) {
      next();
    } else {
      res.status(401).json("You are not allowed to do that!");
    }
  });
};

const verifyTokenAndEmployee = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role <= 2) {
      next();
    } else {
      res.status(401).json("You are not allowed to do that!");
    }
  });
};


// Admin, Manager + Employee if Admin has given them access. +  User if the resource is same as userId(User trying to access its own data.)
const verifyTokenAndUserRouteAccess = (req, res, next) => {
  verifyToken(req, res, () => {
    AdminAccessEmp.find({name:'userAccess'} , (err, accessFlag)=>{
      if (err) res.status(500).json("Internal server error");
      console.log(accessFlag)
      if (req.user.role <= 1 || req.user._id === req.params.id || (req.user.role === 2 && accessFlag.isAdminAccessEnabled)) {
        next();
      } else {
        res.status(401).json("You are not allowed to do that!");
      }
    });
  });
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(401).json("You are not alowed to do that!");
    }
  });
};


module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyTokenAndManager,
  verifyTokenAndEmployee,
  verifyTokenAndUserRouteAccess,
};
