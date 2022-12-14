const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
const path = require("path");
const app = express();
const reservationsRouter = require("./routes/reservations");

// ?
app.use(express.urlencoded({ extended: true }));

//Middleware: Puts the json data in a pages body in a req object, parses the data
app.use(express.json());

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  require("dotenv").config();

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  require("dotenv").config({
    path: path.resolve(__dirname, "./.env"),
  });
}

//allows for different domains to communicate
app.use(
  cors({
    origin: [
      process.env.ORIGIN,
      process.env.NEXT_PUBLIC_RESTAURANT_SCRATCH_API,
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// // Create a cookie parser
// app.use(cookieParser());

// // Create cookie session
// app.use(
//   session({
//     key: "user",
//     secret: [process.env.COOKIE_KEY],
//     resave: false,
//     saveUninitialized: false,
//   })
// );

//Middleware: Logging
app.use(morgan("dev"));

//routes
app.use(reservationsRouter);

// Server setup
app.listen(process.env.PORT, () => {
  console.log(`Server Running on port: ${process.env.PORT}`);
});
