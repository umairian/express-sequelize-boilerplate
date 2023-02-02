const { Blogs, Users } = require("../models");

module.exports = {
  get: async (req, res) => {
    try {
      const blogs = await Blogs.findAll({
        include: {
          model: Users,
          as: "user",
        },
      });
      return res.status(200).send({ blogs });
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong!");
    }
  },
  create: async (req, res) => {
    try {
      const { user, body } = req;
      const { title, description } = body;

      if (!title || !description) {
        throw { status: 400, message: "Required fields can't be empty" };
      }

      const createdBlog = await Blogs.create({
        title,
        description,
        fk_user_id: user.id,
      });

      return res.status(200).send({ blog: createdBlog });
    } catch (err) {
      console.log(err);
      return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong!");
    }
  },
};
