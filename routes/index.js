const express = require("express");
const router = express.Router();
const medicinesRouter = require("./medicines");
const stocksRouter = require("./stocks");

router.use("/api/medicines", medicinesRouter);
router.use("/api/stocks", stocksRouter);

module.exports = router;
