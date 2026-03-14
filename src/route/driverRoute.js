import { Router } from "express";
import { Register } from "../controller/RegisterController.js";

const router = Router()

router.post('/register' , Register)

export default router