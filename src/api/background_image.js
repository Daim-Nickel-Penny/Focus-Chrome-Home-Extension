const express = require("express");
const axios = require("axios");
const rateLimit = require("express-rate-limit");
const utilities = require("./utilities");

const router = express.Router();

const BASE_URL = process.env.BASE_URL_API;

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
});

let cachedData;
let cachedTime;

router.get("/", limiter, async (req, res, next) => {
  try {
    if (cachedTime && cachedTime > Date.now() - 1000 * 60) {
      return res.json(cachedData);
    }
    let query_date = "";
    if (req.query.date) {
      query_date = utilities.randomDate();
    } else {
      query_date = utilities.randomDate();
    }
    const params = new URLSearchParams({
      api_key: process.env.API_KEY,
      date: query_date,
    });
    const { data } = await axios.get(`${BASE_URL}${params}`);
    cachedTime = Date.now();
    cachedData = data;
    data.cachedTime = cachedTime;
    return res.json(data);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
