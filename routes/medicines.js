const express = require("express");
const router = express.Router();

const medicines = require("../controllers/medicines");

router.post("/", medicines.add);
router.get("/", medicines.get);
router.delete("/", medicines.delete);

module.exports = router;
