import jwt from "jsonwebtoken";

export const verifyToken = async (req, reply) => {
  try {
    const authHeader = req.header["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return reply.status(403).send({ message: "Accesstoken required" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded; //This line of code is creating a new field called user in the req (request) object. It assigns to this field the value of decoded, which contains the data extracted from the JWT token after verification.
    return true;
  } catch (error) {
    return reply.status(403).send({ message: "invalid or expired token " });
  }
};
