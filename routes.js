// routes.js
const express = require("express");
const router = express.Router();
const { cachedDataObj } = require("./db"); // Change to cachedDataObj

router.post("/displayData", async (req, res) => {
  try {
    console.log('Cached Data:', cachedDataObj); // Change to cachedDataObj
    res.send([cachedDataObj.food_items, cachedDataObj.food_category]); // Change to cachedDataObj
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
