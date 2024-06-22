const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const addDestinationRoutes = require("./routes/addDestination");
const userRoutes = require("./routes/user");
const loginRoutes = require("./routes/signin");
const destinationsRouter = require("./routes/destinations")

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Mount routes
app.use("/destination", addDestinationRoutes);
app.use("/users", userRoutes);  // Mount user-related routes
app.use("/users", loginRoutes); // Mount login-related routes
app.use("/destination",destinationsRouter)

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
