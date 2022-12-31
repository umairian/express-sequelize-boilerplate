const { Router } = require("express");
const router = Router();

// Middlewares
const authenticateUser = require("../middlewares/authenticate_user");

// Controllers
const controller = require("../controllers/user");

// Routes
const blogRouter = require("./blog");

router.route("/").post(controller.create).get(controller.get);
router.use("/:userId/blogs", authenticateUser, blogRouter);
router
  .route("/:userId")
  .all(authenticateUser)
  .get(controller.getOne)
  .put(controller.update);

module.exports = router;
