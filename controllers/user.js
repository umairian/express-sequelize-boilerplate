const { Users } = require("../models");

module.exports = {
  get: async (req, res) => {
    try {
      const users = await Users.findAll();
      return res.status(200).send({ users });
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .message(err.message || "Something went wrong!");
    }
  },
  getOne: async (req, res) => {
    try {
      const { user } = req;
      return res.status(200).send({ user });
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .message(err.message || "Something went wrong!");
    }
  },
  create: async (req, res) => {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        throw { status: 400, message: "Required fields can't be empty" };
      }

      const createdUser = await Users.create({
        name,
        email,
      });

      return res.status(200).send({ user: createdUser });
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .message(err.message || "Something went wrong!");
    }
  },
  update: async (req, res) => {
    try {
      const { user, body } = req;
      const { name } = body;

      if (!name) {
        throw { status: 400, message: "Required fields can't be empty" };
      }

      await Users.update(
        {
          name,
        },
        {
          where: {
            id: user.id,
          },
          individualHooks: true,
        }
      );

      return res.status(200).send("User updated successfully");
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .message(err.message || "Something went wrong!");
    }
  },
};
