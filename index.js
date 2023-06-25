import Hapi from "@hapi/hapi";
import { example, login, parameters } from "./plugin.js";

const init = async () => {
  const server = Hapi.server({
    host: "localhost",
    port: 5000,
  });

  server.route({
    path: "/",
    method: "GET",
    handler: (req, h) => {
      return h.response({ message: "OK" });
    },
  });

  await server.register([
    {
      plugin: example,
    },
    {
      plugin: login,
    },
    {
      plugin: parameters,
    },
  ]);

  await server.start();
  console.log("App running on %s", server.info.uri);
};

init();
