const express = require("express");
const argon2 = require("argon2");
const User = require("../models/User");
const { createUser } = require("../types");

const router = express.Router();

router.post("/signup", async (req, res) => {
  console.log("Received request:", req.body); // Log the incoming request body
  try {
    const createPayload = req.body;
    const parsePayload = createUser.safeParse(createPayload);

    if (!parsePayload.success) {
      console.error("Validation errors:", parsePayload.error.errors); // Log validation errors
      return res.status(400).json({ errors: parsePayload.error.errors });
    }

    const { username, email, password } = parsePayload.data;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await argon2.hash(password);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error.message); // Log the error message
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
});

module.exports = router;
