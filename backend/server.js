const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const complaintRoutes = require("./routes/complaint.route");
const authRoutes = require("./routes/auth.route")
const connectDB = require("./lib/db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: "*"
}));

app.use("/api/complaint", complaintRoutes);
app.use("/api/auth",authRoutes)

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB", err);
    process.exit(1);
  });