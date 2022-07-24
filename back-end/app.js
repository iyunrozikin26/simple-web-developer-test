if (process.env) require("dotenv").config();

const express = require("express");
const dbSetup = require("./db/db-setup");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes");

dbSetup();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
