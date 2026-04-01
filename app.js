const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const recordRoutes = require("./routes/recordRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");  // <-- this must be here

const app = express();   // <-- app must be created BEFORE using app.use()

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);   // <-- this must come AFTER app is created

app.listen(5000, () => {
  console.log("Server running on port 5000");
});