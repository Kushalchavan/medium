import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../model/user.model";
import type { JwtUserPayload } from "../shared/types";

export const verify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.cookies?.jwt ||
      (req.headers.authorization?.startsWith("Bearer")
        ? req.headers.authorization?.split(" ")[1]
        : undefined);
    if (!token) return res.status(401).json({ message: "No token provided" });

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET is not set");

    const decoded = jwt.verify(token, secret) as JwtPayload & JwtUserPayload;
    if (!decoded?.userId) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    // fetch user
    const doc = await User.findById(decoded.userId)
      .select("username email")
      .lean();
    if (!doc) return res.status(401).json({ message: "User not found" });

    req.user = doc;
    next();
  } catch (error) {
    console.log("Error in verify middleware", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
