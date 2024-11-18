
//logic of fetching data from Category table and storing all values in categories variable and return this variable 

import { Category } from "../../model/index.js";

export const getAllCategories = async (req , reply)=>{
  try {
    const categories = await Category.find();
    return reply.send(categories);
  } catch (error) {
    return reply.status(500).send({ message: "An error occured " , error });
  }
}