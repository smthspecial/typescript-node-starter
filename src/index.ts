import { createServer as createNodeServer } from "node:https";

export const createServer = () => {
  createNodeServer({}, () => {});
};
