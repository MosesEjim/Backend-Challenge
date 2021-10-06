const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Load BuyRequest Model
const BuyRequest = require("../../models/BuyRequest");
const SellRequest = require("../../models/SellRequest");

const conditionVal = {
  A1: 7,
  A2: 6,
  B1: 5,
  B2: 4,
  C: 3,
  "C/B": 2,
  "C/D": 1,
};

router.get("/:type", (req, res) => {
  if (req.params.type == "buy") {
    BuyRequest.find()
      .then((requests) => res.json(requests))
      .catch((err) => res.status(400).json(err));
  } else if (req.params.type == "sell") {
    SellRequest.find()
      .then((requests) => res.json(requests))
      .catch((err) => res.status(400).json(err));
  }
});

router.post("/buy/create", (req, res) => {
  console.log(req.body.device_name);
  const newRequest = new BuyRequest({
    device_name: req.body.device_name,
    device_condition: req.body.device_condition,
    storage_size: req.body.storage_size,
    price: conditionVal[req.body.device_condition] * req.body.storage_size,
  });

  console.log(newRequest);
  newRequest
    .save()
    .then(() => {
      res.json({
        data: {
          status: "success",
          BuyRequest: newRequest,
        },
      });
    })
    .catch((err) => console.log(err));
});

router.post("/sell/create", (req, res) => {
  console.log(req.body.device_name);
  const newRequest = new SellRequest({
    device_name: req.body.device_name,
    device_condition: req.body.device_condition,
    storage_size: req.body.storage_size,
    price: conditionVal[req.body.device_condition] * req.body.storage_size,
  });

  console.log(newRequest);
  newRequest
    .save()
    .then(() => {
      res.json({
        data: {
          status: "success",
          SellRequest: newRequest,
        },
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
