const userModel = require("../model/userModel");

const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(200).send({
        success: true,
        message: "Unauthorized user",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in middleware",
      error,
    });
  }
};

module.exports = { isAdmin };
