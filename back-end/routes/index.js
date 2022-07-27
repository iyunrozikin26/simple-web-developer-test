const express = require("express");
const Controller = require("../controllers/userController");
const router = express.Router();
const { authentication, authorization } = require("../middlewares/auth");

router.get("/users", authentication, Controller.getUsers);
router.post("/users", authentication, Controller.postUsers);
router.post("/login", authentication, Controller.postLogin);
router.get("/users/:id", authentication, Controller.userById);
router.delete("/users/:id", authentication, authorization, Controller.deletedUser);

module.exports = router;
