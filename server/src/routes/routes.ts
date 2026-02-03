import { Router } from "express";
import { createShortUrl, deleteShortUrl, redirectToUrl } from "@/controllers";

const router = Router();

//put in Database
router.post("/urls", createShortUrl);
router.delete("/delete/:shortCode", deleteShortUrl);
router.get("/:shortCode", redirectToUrl);

//fetch the original url
//delete the original stored url

export default router; 