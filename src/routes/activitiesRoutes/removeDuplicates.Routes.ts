import { Router } from "express";
import RemoveDupl from "../../activities/remove-duplicates/removeDuplicates";


const removeDuplicatesRoutes = Router()

removeDuplicatesRoutes.post("/", RemoveDupl.postWord);

export default removeDuplicatesRoutes