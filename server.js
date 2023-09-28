const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config/config");
const contactRoutes = require("./routes/contact");
const mongoose = require("mongoose");
const port = 3000;

mongoose.Promise = global.Promise;

mongoose.connect(config.db);
let db = mongoose.connection;

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", (err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to the database");
  }
});

db.on("error", (err) => {
  console.log(`Database error: ${err}`);
});
const app = express();

app.use(express.static("public"));

// Set body parser middleware
app.use(bodyParser.json());

if (process.env.CORS) {
  app.use(cors());
}

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ err: err });
});

app.use("/api/admin", contactRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
