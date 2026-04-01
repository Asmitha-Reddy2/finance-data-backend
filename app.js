const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const recordRoutes = require("./routes/recordRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/records", recordRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
