import { Router } from "express";

const viewsRouter = Router();

viewsRouter.get("/chat", async (req, res) => {
  res.render("chat", { style: "chat.css", title: "Chat con Websocket" });
});

export default viewsRouter;
