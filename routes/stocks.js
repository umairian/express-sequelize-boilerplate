const express = require("express");
const router = express.Router();

const stocks = require("../controllers/stocks");

router.post("/", stocks.add);
router.get("/", stocks.get);
router.delete("/", stocks.delete);

module.exports = router;
