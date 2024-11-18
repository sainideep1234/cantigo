import { Branch, Customer, DeliveryPartner, Order } from "../../model/index.js";

export const createOrder = async (req, reply) => {
  try {
    const { userId } = req.user; //as verify token passed than you get the userId this is for private path of user
    const { items, branch, totalPrice } = req.body; // this is coming from user fontend part

    const customerData = await Customer.findById(userId);
    const branchData = await Branch.findById(branch);

    if (!customerData) {
      return reply.status(404).send({ message: "Customer not found " });
    }

    const newOrder = new Order({
      // This line define a insatnce of order table newOrder and providing the value .

      //providing value to each field( columns ) of Order table
      customer: userId,
      items: items.map((item) => ({
        id: item.id,
        item: item.item,
        count: item.count,
      })),
      branch: branch, // is equal to branch bca key and value has same name
      totalPrice,
      deliveryLocation: {
        latitude: customerData.liveLocation.latitude,
        longitude: customerData.liveLocation.longitude,
        address: customerData.address || "NO address available ",
      },
      pickuplocation: {
        latitude: branchData.location.latitude,
        longitude: branchData.location.longitude,
        address: branchData.address || "NO address available ",
      },
    });
    const savedOrder = await newOrder.save(); //This line is saving the newOrder instance into your database.
    return reply.status(201).send(savedOrder);
  } catch (error) {
    return reply.status(500).send({ message: "failed to create order", error });
  }
};

export const confirmOrder = async (req, reply) => {
  // here logic of status "available" , "confirms" , "arriving" , "delivered" , "cancelled" which status delivery partner has
  try {
    const { orderId } = req.params;
    const { userId } = req.user; // this is detail of delivery partner
    const { deliveryPersonLocation } = req.body;

    const deliveryPerson = await DeliveryPartner.findById(userId);
    if (!deliveryPerson) {
      return reply.status(404).send({ message: "Delivery Person not found " });
    }

    // now check order is available in database
    const order = await Order.findById(orderId);
    if (!order) {
      return reply.status(404).send({ message: "Order not found " });
    }

    //now order is available and delivey partner is available now check the status of order if available then only delivery partner take order

    if (order.status !== "available") {
      return reply.status(404).send({ message: "Order is not availabel " });
    }
    //now order is available so change the status of this order to confirmed
    order.status = "confirmed ";

    //now assign the delivery poartner to order
    order.deliveryPartner = userId;
    order.deliverypersonlocation = {
      latitude: deliveryPersonLocation?.latitude, //optional chaining
      longitude: deliveryPersonLocation?.longitude,
      address: deliveryPersonLocation.address || "",
    };

    req.server.io.to(orderId).emit("orderConfirmed" , order);

    await order.save();
    return reply.send(order);
  } catch (error) {
    return reply
      .status(500)
      .send({ message: "Failed to confirm order ", error });
  }
};


export const updateOrderStatus = async (req, reply) => {
  try {
    const { orderId } = req.params;
    const { status, deliveryPersonLocation } = req.body; // these status,deliveryPersonLocation variable are taking from frontend , but ideally you should write the logic of thesee in backend as well

    const { userId } = req.user; // thsi userId we will get from verifyTokenb

    const deliveryPerson = await DeliveryPartner.findById(userId);

    if (!deliveryPerson) {
      return reply.status(404).send({ message: "Delivery person  not found " });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return reply.status(404).send({ message: "Order not found " });
    }

    //now order is available and delivey partner is available now check the status of order if available then only delivery partner take order

    if (["cancelled", "delivered"].includes(order.status)) {
      //this line order satus is either equal to cancelled  ordelivered
      return reply.status(404).send({ message: "Order cannot be updated" });
    }

    if (order.deliveryPartner.toString() !== userId) {
      // this show that if order table delivery person is not equalto userId (delivery partner ) from frontend ths mean you are accessing someone order
      return reply.status(404).send({ message: "Unauthorized" });
    }

    //now order is available so change the status of this order to confirmed
    order.status = status;

    order.deliverypersonlocation = deliveryPersonLocation; // this update frontend deliveryPersonLocation to order table deliverypersonlocation
    await order.save();
    req.server.io.to(orderId).emit("LiveTrackingUpdate" , order); //event of webSocket fire
    return reply.send(order);
  } catch (error) {
    return reply
      .status(500)
      .send({ message: "Failed to update order status ", error });
  }
};

export const getOrder = async (req, reply) => {
  try {
    const { status, customerId, deliveryPartnerId, branchId } = req.body;
    let query = {}; // initiallize a empty object

    //now creating fields of this query object using frontend value . the field name is eactli similar to order  table columns name
    if (status) {
      query.status = status;
    }
    if (customerId) {
      query.customer = customerId;
    }
    if (deliveryPartnerId) {
      query.deliveryPartner = deliveryPartnerId;
      query.branch = branchId;
    }

    const order = await Order.find(query).populate(
      //The .populate() method helps you fetch the actual data from the related collections for the fields like "customer", "branch", "items.item", and "deliveryPartner" in your Order document (row).
      "customer branch items.item deliveryPartner" // these are the fields whose value fetches
    );

    return reply.send(order);
  } catch (error) {
    return reply
      .status(500)
      .send({ message: "Failed to retrive order ", error });
  }
};

export const getOrderById = async (req, reply) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId).populate(
      //The .populate() method helps you fetch the actual data from the related collections for the fields like "customer", "branch", "items.item", and "deliveryPartner" in your Order document (row).
      "customer branch items.item deliveryPartner" // these are the fields whose value fetches
    );

    if (!order) {
      return reply.status(404).send({ message: "order not found  ", error });
    }
    return reply.send(order);
  } catch (error) {
    return reply
      .status(500)
      .send({ message: "Failed to retrive order ", error });
  }
};
