import {
  confirmOrder,
  createOrder,
  getOrderById,
  getOrder,
  updateOrderStatus,
} from "../controller/order/order.js";
import { verifyToken } from "../middleware/auth.js";

export const orderRoutes = async (fastify, options) => {
  fastify.addHook("preHandler", async (req, reply) => {
    const isAuthenticated = await verifyToken(request, reply);
    if (!isAuthenticated) {
      return reply.status(401).send({ message: "unauthenticated", error });
    }
  });

  fastify.post("/order", createOrder);
  fastify.get("/order", getOrder);
  fastify.patch("/order/:orderId/status", updateOrderStatus);
  fastify.post("/order/:orderId/confirm", confirmOrder);
  fastify.post("/order/:orderId", getOrderById);
};
