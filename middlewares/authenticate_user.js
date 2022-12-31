const { Users } = require("../models");

module.exports = async function (req, res, next) {
  try {
    const { userId } = req.params;

    const user = await Users.findByPk(userId);

    if (!user) {
      throw { status: 401, message: "Unauthenticated" };
    }

    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).send(err.message || "Something went wrong!");
  }
};
