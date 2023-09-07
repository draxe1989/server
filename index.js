const express = require("express");
const cors = require("cors");
const router = require("./router");
const cookieParser = require("cookie-parser");

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://asn.com:3300" }));
app.use("/router", router);

function start() {
  try {
    app.listen(PORT, () => {
      console.log("START");
    });
  } catch (error) {
    console.log(error);
  }
}

start();
