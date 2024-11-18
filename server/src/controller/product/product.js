//any type of info of client is pass to server by req argument like param , body , user etc

import { Product } from "../../model/index.js";

export const getProductByCategoryId = async (req, reply) => {
  const { categoryId } = req.params; //this categoryid variable pass by client in req object params field

  try {
    //this lien tell me whose categoryis equal to categoryid giveme that product and  .select("-category") mean exclude the category column from get data .exec mean execute the query 
    const products = await Product.find({ category: categoryId })
      .select("-category")
      .exec();
    return reply.send(products);
  } catch (error) {
    return reply.status(500).send({ message: "An error occured ", error });
  }
};
