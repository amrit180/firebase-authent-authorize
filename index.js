// authentication check for firebase user

const authenFBCheck = (option) => {
  try {
    const firebaseUser = await option.admin
      .auth()
      .verifyIdToken(option.authtoken);
    return firebaseUser;
  } catch (error) {
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};

// role check for admin
const adminCheck = (option) => {
  if (option.role !== "admin") {
    res.status(403).json({
      err: "Admin resource. Access denied.",
    });
  } else {
    next();
  }
};

module.exports.authenFBCheck = authenFBCheck;

module.exports.adminCheck = adminCheck;
