// creating royed for auth.js file of ,middleware 

import { fetchUser, loginCustomer, loginDeliveryPartner, refreshToken } from "../controller/auth/auth.js"
import { updateUser } from "../controller/tracking/tracking.js"
import { verifyToken } from "../middleware/auth.js"

export const authRoutes = async (fastify , options)=>{
  fastify.post("customer/login" , loginCustomer)
  fastify.post("delivery/login" , loginDeliveryPartner)
  fastify.post("/refresh-token" , refreshToken)
  fastify.get("/user" , {preHandler:[verifyToken]} ,fetchUser)  // {preHandler:[verifyToken]} this is middleware definition in fastify and calling the verifytoken logic in end it return true so automtically jump to next callback in express next() is keyword here true .
  fastify.patch("/user" , {preHandler:[verifyToken]} ,updateUser); //patch request to update in existing data 
}