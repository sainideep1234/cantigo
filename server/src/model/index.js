// here we link up all the models created in model folder and export them 

import { Customer , DeliveryPartner , Admin } from "./user.js";
import Branch from "./branch.js";
import Product from "./product.js";
import Category from "./category.js";
import Order from "./order.js";
import Counter from "./counter.js";

export {Branch , Customer , DeliveryPartner , Admin , Product , Category , Order , Counter};