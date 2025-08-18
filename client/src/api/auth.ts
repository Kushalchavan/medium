  import { api } from "../lib/axios";

  export type SignInPayload = {
    email: string;
    password: string;
  };

  export type SignUpPayload = {
    username: string;
    email: string;
    password: string;
  };

  export const signIn = async (data: SignInPayload) => {
    const response = await api.post("/api/v1/auth/signin", data);
    return response.data;
  };

  export const signUp = async (data: SignUpPayload) => {
    const response = await api.post("/api/v1/auth/signup", data);
    return response.data;
  };

  export const logout = async () => {
    const response = await api.post("/api/v1/auth/logout");
    return response.data;
  };
