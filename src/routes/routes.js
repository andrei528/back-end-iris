import express from "express";
import { pedirCaoGuia } from "../controller/controller.js";

const router = express.Router();

router.post("/", pedirCaoGuia);

export default router;