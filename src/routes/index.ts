import { Router } from "express";
import removeDuplicatesRoutes from "./activitiesRoutes/removeDuplicates.Routes";
import WordCount from "../activities/word-count/wordCount";
import wordCountRoutes from "./activitiesRoutes/wordCount.Routes";


const routes = Router();

routes.use("/remove-duplicates", removeDuplicatesRoutes);
routes.use("/word-count", wordCountRoutes);

export default routes;