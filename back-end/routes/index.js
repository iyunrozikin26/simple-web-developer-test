const express = require("express");
const Controller = require("../controllers/userController");
const router = express.Router();
const { authentication, authorization } = require("../middlewares/auth");

router.get("/users", Controller.getUsers);
router.post("/users", Controller.postUsers);
router.post("/login", Controller.postLogin);
router.get("/users/:id", Controller.userById);
router.delete("/users/:id", authentication, authorization, Controller.deletedUser);

module.exports = router;
