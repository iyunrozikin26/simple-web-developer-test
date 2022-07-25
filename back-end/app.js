if (process.env) require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dbSetup = require("./db/db-setup");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes");

dbSetup();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

module.exports = app;


