import express from "express"

const router = express.Router()

import { register, users, login } from "../controllers/userControllers.js"

router.post("/", register)

router.get("/", users)

router.post("/login", login)

export default router