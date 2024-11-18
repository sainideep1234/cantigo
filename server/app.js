// Creating a server a fastify server
import "dotenv/config";
import fastify from "fastify";
import { connectDB } from "./src/config/connect.js";
import { admin, buildAdminRouter } from "./src/config/setup.js";
import { PORT } from "./src/config/config.js";
import { registerRoutes } from "./src/routes/index.js";
import fastifyScocketIO from "fastify-socket.io";

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  // app is instanceOf fastify that conatin all teh methods put ,  post ,get and other method provided by fastify
  //initailizing routes
  const app = fastify(); //// here we instantiate the fastify

  app.register(fastifyScocketIO, {
    // initialize the web-socket
    cors: {
      origin: "*", //a llow all origi can hit this socket
    },
    pingInterval: 10000,
    pingTimeout: 5000,
    transports: ["websocket"],
  });

  await registerRoutes(app);

  await buildAdminRouter(app);

  app.listen({ port: PORT, host: "0.0.0.0" }, (err, addr) => {
    // allocating a port and callback function if error
    if (err) {
      console.log(err);
    } else {
      console.log(
        `blinkit server is running on  http://localhost:${PORT}${admin.options.rootPath}`
      );
    }
  });

  // app.ready() check server is ready. as the server is ready we implemnt a socket on it
  app.ready().then(() => {
    app.io.on("connection", (socket) => {
      console.log("a user connected ✅");

      socket.io("joinRoom", (orderId) => {
        socket.join(ordeId);
        console.log(`👌 user joined room ${orderId}`);
      });

      socket.io.on("disconnect", () => {
        console.log("user disconnected ❌");
      });
    });
  });
};

start(); // calling the server
