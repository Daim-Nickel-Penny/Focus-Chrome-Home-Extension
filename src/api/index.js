const express = require("express");
const background_image = require("./background_image");
const emojis = require("./emojis");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/background-image", background_image);

module.exports = router;
