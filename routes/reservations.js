const express = require("express");
const router = express.Router();

//Get all products items of a certain type
router.post("/reservations", async (req, res) => {
  try {
    console.log("reservations");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
