import express from "express";
import { PLAYER } from "../controllers/friendCon.js";

export const friendRt = express.Router();
    friendRt.post("/", PLAYER.Create);
    friendRt.get("/", PLAYER.FetchAll);
    friendRt.get("/:id", PLAYER.GetOne);
    friendRt.put("/:id", PLAYER.Update);
    friendRt.delete("/:id", PLAYER.Delete);

    
    
    