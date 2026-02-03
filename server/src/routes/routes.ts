import { Router } from "express";
import { createShortUrl } from "@/controllers";

const router = Router();

//put in Database
router.post("/urls", createShortUrl);
router.delete("/delete",)

//fetch the original url
//delete the original stored url

export default router; 