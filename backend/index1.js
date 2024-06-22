const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const argon2 = require("argon2");


const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://bhavik41:xYHIqF1ONTmIl7Li@cluster0.n0yb2fe.mongodb.net/Destinations", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit the process with failure
  }
};

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true,
  autoIndex: true
});

const User = mongoose.model("User", userSchema);

// Connect to MongoDB
connectDB();

// Define Zod Schema for Validation
const userSchemaZod = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long")
});

// Signup Endpoint
app.post("/signup", async (req, res) => {
  console.log("Received request:", req.body); // Log the incoming request body
  try {
    // Validate Request Body
    const parsed = userSchemaZod.safeParse(req.body);
    if (!parsed.success) {
      console.error("Validation errors:", parsed.error.errors); // Log validation errors
      return res.status(400).json({ errors: parsed.error.errors });
    }

    const { username, email, password } = parsed.data;

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

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
