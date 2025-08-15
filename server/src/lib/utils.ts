import jwt from "jsonwebtoken";
import { Response } from "express";
import type { JwtUserPayload } from "../shared/types";

export const generateToken = (userId: string, res: Response) => {
  const secret = process.env.JWT_SECRET;
  if (!secret)
    throw new Error("JWT_SECRET is not defined in environment variable");

  const token = jwt.sign({ userId } as JwtUserPayload, secret, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    // secure: process.env.NODE_ENV === "production",
  });

  return token;
};
