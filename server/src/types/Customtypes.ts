import { Request } from "express";
import { UserType } from "../shared/types";

export interface AuthenticatedRequest extends Request {
  user?: UserType;
  userId?: string;
}
