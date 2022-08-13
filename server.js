const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const router = require("./routes");

//allows for different domains to communicate
app.use(
  cors({
    origin: [process.env.ORIGIN, process.env.NEXT_PUBLIC_ART_STORE_API],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Create a cookie parser
app.use(cookieParser());

// Create cookie session
app.use(
  session({
    key: "user",
    secret: [process.env.COOKIE_KEY],
    resave: false,
    saveUninitialized: false,
  })
);

// ?
app.use(express.urlencoded({ extended: true }));

//Middleware: Puts the json data in a pages body in a req object, parses the data
app.use(express.json());

//Middleware: Logging
app.use(morgan("dev"));

//routes
app.use(router);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  require("dotenv").config();

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Server setup
app.listen(process.env.PORT, function () {
  console.log("Server Running on port: " + process.env.PORT);
});
