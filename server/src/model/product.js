import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  name:{type:String , required:true},
  image:{type:String, required:true},
  price:{type:Number , required:true},
  discountprice:{type:Number},
  quantity:{type:String , required:true},
  Category:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Category"
  }
});

const Product = mongoose.model("Product" , productSchema);
export default Product;