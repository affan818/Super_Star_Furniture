import express from "express";
import homePageController from "../controllers/homePageController.js";
const router = express.Router();

// routes
router.get("/homepage", homePageController);

export default router;
