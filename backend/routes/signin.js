const express = require("express");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config"); 
const { signInSchema } = require("../types");


const router = express.Router();

router.post('/signin', async (req, res) => {
    const createPayload = req.body;
    console.log(createPayload);
    const parsePayload = signInSchema.safeParse(createPayload);

    if (!parsePayload.success) {
        res.status(411).json({
            message: "Invalid input type"
        })
        return
    }
    const { username, password } = parsePayload.data;

    const User = require('../models/User');
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Verify the password
    if (await argon2.verify(user.password, password)) {
        const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: "Sign-in successful", token });
    } else {

        res.status(401).json({ message: "Invalid credentials" });
    }
})

module.exports = router