require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./database/db");
connectDB();
const router = require("./routes/task");

app.use(express.json());
app.use(cors());
app.use("/api/v1/tasks", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
