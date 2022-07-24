const express = require("express");
const Controller = require("../controllers/userController");
const router = express.Router();

router.get("/users", Controller.getUsers);
router.post("/users", Controller.postUsers);
router.get("/users/:id", Controller.userById);

module.exports = router;
