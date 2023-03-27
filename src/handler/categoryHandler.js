import Express from "express";
import { body } from "express-validator";
import rejectBadRequests from "../utils/validationService.js";

const Router = Express.Router();

Router.post("/", (req, res) => {
	res.send("This is category handler");
});

export default Router;
