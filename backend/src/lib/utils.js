import jwt from "jsonwebtoken";
import "dotenv/config";

export const generateToken = (userId, res) => {

 const { JWT_SECRET } = process.env;
 if (!JWT_SECRET) {
   throw new Error("JWT_SECRET is not configured");
 }

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 1000,
    httpOnly: true, //prevents XSS attacks
    sameSite: "strict", //prevents CSRF attacks
    secure: process.env.NODE_ENV === "development" ? false : true,
  });

  return token;
};
