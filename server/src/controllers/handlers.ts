import crypto from 'crypto';
import db from "../db/index"
import { Urls } from '../db/schema';
import { Request, Response } from 'express';
import { sql, eq } from "drizzle-orm";

export const createShortUrl = async (req: Request, res: Response,) => {
    try {
        const { originalUrl } = req.body;

        if (!originalUrl || typeof originalUrl !== 'string') return res.status(400).json({ error: 'originalUrl is required' });

        const shortCode = crypto.randomBytes(10).toString('base64url').slice(0, 6);
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

        const deleted = await db.delete(Urls).where(eq(Urls.shortCode, shortCode)).returning();
        if (deleted.length === 0) {
            return res.status(404).json({ error: "Short code not found, can't delete" })
        }
        res.status(200).json({
            message: "Url deletion success"
        })
    } catch (error) {
        console.error("Error deleting short URL:", error);
        res.status(500).json({ error: 'Failed to delete short URL' });
    }
}
//redirectToUrl
export const redirectToUrl = async (req: Request, res: Response) => {
    try {
        const shortCode = req.params.shortCode;
        if (!shortCode || typeof shortCode !== 'string') {
            return res.status(400).json({ error: "Invalid short code!!" });
        }

        // Find the URL by short code
        const result = await db.select().from(Urls).where(eq(Urls.shortCode, shortCode));

        // Check if URL exists (array could be empty)
        if (result.length === 0) {
            return res.status(404).json({ error: "Short code not found" });
        }

        const urlRecord = result[0];

        // Increment click count (await to catch errors)
        await db.update(Urls)
            .set({ clicks: sql`${Urls.clicks} + 1` })
            .where(eq(Urls.shortCode, shortCode));

        res.redirect(urlRecord.originalUrl);
    } catch (error) {
        console.error("Error redirecting short URL:", error);
        res.status(500).json({ error: 'Failed to redirect to URL' });
    }
}
//getUrlStats