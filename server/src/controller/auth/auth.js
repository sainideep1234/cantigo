import { Customer, DeliveryPartner } from "../../model/index.js";
import jwt from "jsonwebtoken";

const genrtaeTokens = (user) => {
  //this is for access
  const accessToken = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  const refreshToken = jwt.sign(
    //when access gets expire we use it to genrate access key
    { userId: user._id, role: user.role },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  return { accessToken, refreshToken };
};

export const loginCustomer = async (req, reply) => {
  try {
    const { phone } = req.body;
    let customer = await Customer.findOne({ phone });
    if (!customer) {
      //if customer not exsist than we create a new customer
      customer = new Customer({
        phone,
        role: "Customer",
        isActivated: true,
      });
      await customer.save();
    }

    const { accessToken, refreshToken } = genrtaeTokens(customer);

    return reply.send({
      message: customer ? "LoginSuccessful" : "Customer created and logged in ",
      accessToken,
      refreshToken,
      customer,
    });
  } catch (error) {
    return reply.status(500).send({ message: "an error occured  ", error });
  }
};

export const loginDeliveryPartner = async (req, reply) => {
  try {
    const { email, password } = req.body;
    let deliveryPartner = await Customer.DeliveryPartner({ email });
    if (!deliveryPartner) {
      return reply.status(404).send({ message: "dekivery partner not found " });
    }

    const isMatch = password === deliveryPartner.password;
    if (!isMatch) {
      return reply.status(404).send({ message: "Invalid credentials  " });
    }

    // if match than this run because if not match than stop in above line and return fdrom there

    const { accessToken, refreshToken } = genrtaeTokens(deliveryPartner);

    return reply.send({
      message: "Login Successful",
      accessToken,
      refreshToken,
      deliveryPartner, //delivry partner object
    });
  } catch (error) {
    return reply.status(500).send({ message: "an error occured  ", error });
  }
};

export const refreshToken = async (req, reply) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return reply.status(401).send({ message: " Refresh token required" });
  }

  // here we have refresh token beacuse if not have rfefresh token program end above

  try {
    const decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    let user; //created a variable beacuse neded to know role either customer or deliverypartner
    if (decoded.role == "Customer") {
      //we can do this because at time of token creation token has _id and role
      user = await Customer.findById(decoded.userId);
    } else if (decoded.role === "DeliveryPartner") {
      user = await DeliveryPartner.findById(decoded.userId);
    } else {
      return reply.status(403).send({ message: "invalid token role " });
    }

    // now user variable value checking
    if (!user) {
      //if user is not found
      return reply.status(403).send({ message: "invalid token " });
      const { accessToken, refreshToken: newRefreshToken } =
        genrtaeTokens(user);
      return reply.status(403).send({ message: "invalid token " });
    }
  } catch (error) {
    return reply
      .status(403)
      .send({ message: "token refreshed ", accessToken, newRefreshToken });
  }
};

//suppose your data is update and than your profile fetching is done . access only by those user who access application private only acess by user
export const fetchUser = async (req, reply) => {
  try {
    const { userId, role } = req.user; //login user userid and role
    let user;
    if (decoded.role == "Customer") {
      //we can do this because at time of token creation token has _id and role
      user = await Customer.findById(userId);
    } else if (role === "DeliveryPartner") {
      user = await DeliveryPartner.findById(decoded.userId);
    } else {
      return reply.status(403).send({ message: "invalid token role " });
    }

    if (!user) {
      return reply.status(404).send({ message: "user not found " });
    }

    return reply.send({ message: "user fetched succesfully " }, user);
  } catch (error) {
    return reply.status(500).send({ message: "invalid or expired token " });
  }
};


