import shortID from "shortid"; 
import URL from "../model/url.js";

export async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "URL is required" });
    
    const shortId = shortID.generate();

    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortId });
}

export async function handleGetAnalytics(req,res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId})
    return res.json({
        totalClick: result.visitHistory.length,
        analytics:result.visitHistory})
}