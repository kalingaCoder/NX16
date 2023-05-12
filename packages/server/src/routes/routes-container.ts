import { Express } from "express";

export function addRoutes(app: Express): void {
  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });
}
