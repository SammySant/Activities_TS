import { Router } from "express";
import WordCount from "../../activities/word-count/wordCount";



const wordCountRoutes = Router();

wordCountRoutes.post("/", WordCount.postWord);

export default wordCountRoutes;