import { Customer, DeliveryPartner } from "../../model/index.js";

export const updateUser = async (req, reply) => {
  try {
    const { userId } = req.user;
    const updateData = req.body;

    //this user either found deliverypartner or customer data from database if yes then update
    let user =
      (await Customer.findById(userId)) ||
      (await DeliveryPartner.findById(userId));
    if (!user) {
      return reply.status(404).send({ message: "user not found " });
    }

    let userModel;

    if (user.role == "Customer") {
      userModel = Customer;
    } else if (user.role == "DeliveryPartner") {
      userModel = DeliveryPartner;
    } else {
      return reply.status(400).send({ message: "invalid user role  " });
    }

    const updateUser = await Usermodel.findByIdAndUpdate(
      userId,
      { $set: updateData }, // this overide the value at particular id with updatedata value
      { new: true, runValidators: true } // this grant the permissioon override teh value and verify 
    );
//if not updated value of user 
    if(!updateUser){
      return reply.status(404).send({ message: "user not found " });
    }

    //successfullyupdate the credentials of user
    return reply.send({

      message:"user updted successfully ",
      user: updatedUser,
    })

  } catch (error) {      return reply.status(500).send({ message: "failed to update user  " });}
};
