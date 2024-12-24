import express from 'express';
import { handleGenerateNewShortUrl } from '../controller/url.js';

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);

export default router;
