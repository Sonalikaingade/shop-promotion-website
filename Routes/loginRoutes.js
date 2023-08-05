const loginControllers = require("./../Controllers/loginControllers");

const express = require("express");

const Router = express.Router();

Router.route("/").get(loginControllers.login).post(loginControllers.loginSend);
Router.route("/loginOtp").post(loginControllers.loginOtp);

module.exports = Router;
