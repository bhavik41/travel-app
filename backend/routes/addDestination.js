const express = require("express");
const Destination = require("../models/Destination");
const { createDestination } = require("../types");

const router = express.Router();

// Endpoint to create a new destination
router.post("/add-destination", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createDestination.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Destination is not created",
      errors: parsePayload.error.errors  // Provide detailed error messages
    });
    return;
  }

  try {
    await Destination.create(parsePayload.data);  // Correct use of Destination model
    res.json({
      msg: "Destination created successfully"
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error creating destination",
      error: error.message
    });
  }
});

module.exports = router;
