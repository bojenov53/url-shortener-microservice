import { Router } from "express";
import urlController from "../controller/urlController.js";

const router = Router();

router.post('/shorturl', urlController.url);
router.post('/shorturl/:short_url', urlController.redirectUrl);


export default router;