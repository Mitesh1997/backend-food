import express ,{Request,Response,NextFunction} from "express"
import { CreateVandor, GetVanndorByID, GetVanndors } from "../controllers";

const router=express.Router();

router.post('/vandor',CreateVandor)
router.get('/vandors',GetVanndors)
router.get('/vandor/:id',GetVanndorByID)


router.get('/',(req:Request, res:Response, next:NextFunction)=>{
    res.json({message:"Hello from Admin"})
})

export {router as AdminRoute}