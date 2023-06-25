import validateLogin from "./validate.js";

const example = {
  name: "example",
  version: "1.0.0",
  register: async (server, options) => {
    server.route({
      path: "/example",
      method: "GET",
      handler: (req, h) => {
        return h.response({ message: "OK" });
      },
    });
  },
};

const login = {
  name: "login",
  version: "2.0.0",
  register: async (server, options) => {
    server.route({
      path: "/login",
      method: "POST",
      handler: (req, h) => {
        try {
          return h
            .response({
              message: "success. created",
              data: validateLogin(req.payload),
            })
            .code(201);
        } catch (error) {
          return h
            .response({
              message: error.message,
            })
            .code(400);
        }
      },
    });
  },
};

const parameters = {
  name: "param",
  version: "2.0.0",
  register: async (server, options) => {
    server.route({
      path: "/example/{id}/{detail}",
      method: "GET",
      handler: (req, h) => {
        return h.response({
          message: "success. get data",
          data: req.params,
        });
      },
    });
  },
};

export { example, login, parameters };
