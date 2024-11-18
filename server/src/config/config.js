// how we perfoem authentication and system managemnet on an=dminjs

import "dotenv/config";
import fastifySession from "@fastify/session";
import ConnectMongoDBSession from "connect-mongodb-session"; /// this will allow you to create session with mongodb
import { Admin } from "../model/index.js";

const MongoDBStore = ConnectMongoDBSession(fastifySession);

export const sessionStore = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions",
});

sessionStore.on("error ", (error) => {
  console.log("session store error ", error);
});

export const authenticate = async (email, password) => {
  
  
  
  if (email='deep@gmail.com' && password =='12345678@123'){
    return Promise.resolve({email:email , password:password});
  }else{
    return null;
  }
  
  
  
  
  
  /*if (email && password) {
    const user = await Admin.findOne({ email });
    if (!user) {
      return null;
    }
    if (user.password == password) {
      return Promise.resolve({ email: email, password: password });
    } else {
      return null;
    }
  }
  return null;*/
};

export const PORT = process.env.PORT || 3000;
export const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD;
