import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils";
import User from "../model/user.model";
import { AuthenticatedRequest } from "../types/Customtypes";

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashPassword });
    if (newUser) {
      // generate token here
      generateToken(newUser._id.toString(), res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller ", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    generateToken(user._id.toString(), res);

    res
      .status(200)
      .json({ _id: user._id, username: user.username, email: user.email });
  } catch (error) {
    console.log("Error in signin controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const checkAuth = (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Not authrorized" });
    return res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkauth controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
