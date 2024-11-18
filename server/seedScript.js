
import "dotenv/config"
import mongoose from "mongoose";
import { Category, Product } from "./src/model/index.js";
import { categories  , products} from "./seedData.js";

async function seedDatabase() {
  try {
    
await mongoose.connect(process.env.MONGO_uri);
await Product.deleteMany({});
await Category.deleteMany({});


const categoryDocs= await Category.insertMany(categories);
const categoryMap = categoryDocs.reduce((map , category)=>{
  map[category.name]=category._id;
  return map;
},{});

const productqithcategoryids = products.map((product)=>({
  ...product,
  category:categoryMap[product.category],
}));

await Product.insertMany(productqithcategoryids);
console.log("seeded successfully 👌");
  } catch (error) {
    console.log("error while seeding" , error)
  }finally{
    mongoose.connection.close();
  }
}

seedDatabase();