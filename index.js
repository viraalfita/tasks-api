const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/tasks", taskRoutes);

// server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
