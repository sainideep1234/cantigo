import mongoose from "mongoose";
import Branch from "./branch.js";

const orderSchema = new mongoose.Schema({
  orderId: { type: String, unique: true },
  deliveryPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryPartner",
    required: true,
  },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
    required: true,
  },
  items: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      count: { type: Number, required: true },
    },
  ],
  deliverylocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: { type: String },
  },
  pickuplocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: { type: String },
  },
  deliverypersonlocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: { type: String },
  },
  status: { type: String ,
    enum:["available" , "confirms" , "arriving" , "delivered" , "cancelled"],
    default:"available"
  },
  totalPrice:{type:Number , required:true},
  createdat:{type:Date , default:Date.now},
  updatedat:{type:Date , default:Date.now},
});

async function getNextSequenceValue(sequenceName){
  const sequenceDocument = await Counter.findOneAndUpdate({name:sequenceName}, {$inc:{sequence_value:1}} , {new:true , upsert:true});
  return sequenceDocument.sequence_value;
}


orderSchema.pre("save" , async function (next) {
  if(this.isNew){
    const sequenceValue = await getNextSequenceValue("orderId");
    this.orderId=`ORDRS${sequenceValue.toString().padStart(5 , "0")}`;
  }
  next();
})


const Order = mongoose.model("Order", orderSchema);

export default Order;
