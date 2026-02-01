import { Router } from "express";

const router = Router();

//put in Database
router.post("/urls:originalUrl", (req, res) => {
    const params = req.params.originalUrl;

    res.json({ status: "ok", message: params })
})

//fetch the original url
//delete the original stored url

export default router; 