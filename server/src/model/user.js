import mongoose from "mongoose";

//base user schema blueprint to all the users of app

const userSchema = new mongoose.Schema({
  name: { type: String }, // this type definitioon is functionality of mongoose not typescript beacuse we are not using typescript
  role: {
    type: String,
    enum: ["Customer", "Admin", "DeliveryPartner"],
    required: true,
  },
  isActivated: { type: Boolean, default: false },
});

// customer schema
const customerSchema = new mongoose.Schema({
  ...userSchema.obj, //this inherit all the objects of userschema in customerschema
  //adding  aditional fields of customer Schema

  phone: { type: Number, required: true, unique: true },
  role: { type: String, enum: ["Customer"], default: "Customer" },
  liveLocation: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  address: { type: String },
});

// DeliveryPartner schema
const DeliveryPartnerSchema = new mongoose.Schema({
  ...userSchema.obj, //this inherit all the objects of userschema in customerschema
  //adding  aditional fields of customer Schema
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Phone: { type: Number, required: true, unique: true },
  role: { type: String, enum: ["DeliveryPartner"], default: "DeliveryPartner" },
  liveLocation: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  address: { type: String },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch", // establishing relationship
  },
});

// Admin schema

const AdminSchema = new mongoose.Schema({
  ...userSchema.obj, //this inherit all the objects of userschema in customerschema
  //adding  aditional fields of customer Schema
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Admin"], default: "Admin" },
});

export const DeliveryPartner = mongoose.model(
  "DeliveryPartner",
  DeliveryPartnerSchema
); //first argument is name of schema 2nd argument which schema definition

export const Admin = mongoose.model("Admin", AdminSchema);
export const Customer = mongoose.model("Customer", customerSchema);
