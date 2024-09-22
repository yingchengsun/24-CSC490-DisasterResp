/**
 * This module contains the routers for the user routes by calling the appropriate user controller function.
 * @module routes/user.route
 * @file This file contains the routers for the user routes by calling the appropriate user controller function.
 */
"use strict";
const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/all", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/create", userController.createUser);
router.post("/createNewUser", userController.createNewUser);
router.put("/update/:id", userController.updateUserById);
router.put("/updateLocation/:id", userController.updateUserLocationById);
router.put("/updatePassword/:id", userController.updateUserPasswordById); // Obvious will be fixed to be more secure
router.delete("/delete/:id", userController.deleteUserById);
router.get("/email/:email", userController.getUserByEmail);
router.get("/userType/:id", userController.getUserType);

module.exports = router;
