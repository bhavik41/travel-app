const express = require("express");
const router = express.Router();
const Destination = require("../models/Destination");

// GET all destinations
router.get("/destinations", async (req, res) => {
    try {
        const destinations = await Destination.find({});
        res.json({ destinations });
    } catch (error) {
        console.error("Error fetching destinations:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
