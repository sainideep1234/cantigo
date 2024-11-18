import mongoose from "mongoose";
const BranchSchema = new mongoose.Schema({
  name: { type: String , required:true}, // this type definitioon is functionality of mongoose not typescript beacuse we are not using typescript
  location: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  address: { type: String },
  deliverypartners:[
    {type:mongoose.Schema.Types.ObjectId,
      ref :" DeliveryPartner", //refrencing to dekiverypartner schema 
    }
    
  ], // this define that deliverypartners is of array(outer [] shows ) and value in this array is of type onjectid of mongoose 

}); 


const Branch = mongoose.model("Branch" ,BranchSchema );

export default Branch;