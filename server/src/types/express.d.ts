import { UserType } from "../shared/types";

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}
export {};
