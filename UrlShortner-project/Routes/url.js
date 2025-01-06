import express from 'express';
import { handleGenerateNewShortUrl } from '../controller/url.js';

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);

router.get('/analytics',)

export default router;
