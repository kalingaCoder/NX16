import express, { Express } from "express";
import cors from "cors";
import compression from "compression";
import { ApolloServer } from "apollo-server-express";
//import { getApolloServerConfig } from "./apollo-server";
//import { addRoutes } from "../routes/routes-container";

export async function startServer(port: number): Promise<void> {
  const app = express();
  app.use(cors());
  app.use(compression());

  /* const server = new ApolloServer(getApolloServerConfig());
  await server.start();
  server.applyMiddleware({ app, path: "/upp/graphql" }); */

 // addRoutes(app);

  await startExpressServer(app, port);
}

function startExpressServer(app: Express, port: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const server = app.listen(port, (err?: Error) => {
      if (err) {
        reject(err);
      } else {
        console.log(`Listening on port ${port}`);
        resolve();
      }
    });
  });
}
