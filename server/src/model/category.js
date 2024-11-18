import mongoose from "mongoose";

const categoySchema = new mongoose.Schema({
  name:{type:String , required:true},
  image:{type:String, required:true}
});

const Category = mongoose.model("Category" , categoySchema);
export default Category;