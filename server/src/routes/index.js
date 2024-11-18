//register all the rotes 
// here i am defining the preficx routes of authhroutes /api/<authroutes_route eg customer/login ...>

import { authRoutes } from "./auth.js"
import { orderRoutes } from "./order.js"
import { categoryRoutes, productRoutes } from "./product.js"

const prefix = '/api'

export const registerRoutes  =async (fastify)=>{
  fastify.register(authRoutes , {prefix:prefix});
  fastify.register(productRoutes , {prefix:prefix});
  fastify.register(categoryRoutes , {prefix:prefix});
  fastify.register(orderRoutes , {prefix:prefix});
  
}