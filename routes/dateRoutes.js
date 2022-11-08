import express from "express"

const router = express.Router()

import { dates, newDate, updateDate, deleteDate, date } from "../controllers/datesControllers.js"

router.get("/", dates)

router.post("/", newDate)

router
    .route("/:id")
    .get(date)
    .put(updateDate)
    .delete(deleteDate)



export default router