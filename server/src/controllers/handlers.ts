import crypto from 'crypto';
import db from "../db/index"
import { Urls } from '../db/schema';
import { Request, Response } from 'express';
import { eq } from "drizzle-orm";

export const createShortUrl = async (req: Request, res: Response,) => {
    try {
        const { originalUrl } = req.body;
        const shortCode = crypto.randomBytes(10).toString('base64url').slice(0, 6);


        if (!originalUrl || typeof originalUrl !== 'string') return res.status(400).json({ error: 'originalUrl is required' });

        const urlRegex = /^https?:\/\/[\w.-]+\.[a-z]{2,}(\/\S*)?$/i;

        const isValidUrl = urlRegex.test(originalUrl);

        if (!isValidUrl) return res.status(400).json({ error: 'Invalid URL format' });

        const newUrl = await db.insert(Urls).values({
            originalUrl,
            shortCode
        }).returning();

        res.status(201).json({
            shortCode: shortCode,
            shortUrl: `http://localhost:4000/api/v1/${newUrl[0].shortCode}`,
            originalUrl
        })
    } catch (error) {
        console.error("Error creating short URL:", error);
        res.status(500).json({ error: 'Failed to create short URL' });
    }
}

//deleteShortUrl 
export const deleteShortUrl = async (req: Request, res: Response) => {
    try {
        const shortCode = req.params.shortCode;
        if (!shortCode || typeof shortCode !== 'string') return res.status(400).json({ error: "Invalid short code!" })
        await db.delete(Urls).where(eq(Urls.shortCode, shortCode));

        res.status(201).json({
            message: "Url deletion success"
        })
    } catch (error) {
        console.error("Error deleting short URL:", error);
        res.status(500).json({ error: 'Failed to delete short URL' });
    }
}
//redirectToUrl
//getUrlStats