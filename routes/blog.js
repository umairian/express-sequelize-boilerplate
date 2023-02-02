const { Router } = require("express");
const router = Router();

// Controllers
const controller = require("../controllers/blog");

router.route("/").post(controller.create).get(controller.get);

module.exports = router;
