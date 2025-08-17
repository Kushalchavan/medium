import { useMutation } from "@tanstack/react-query";
import {
  signIn,
  signUp,
  logout,
  type SignInPayload,
  type SignUpPayload,
} from "../api/auth";
import { useAuthStore } from "../store/auth";

export const useSignIn = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: (data: SignInPayload) => signIn(data),
    onSuccess: (data) => {
      setUser(data.user);
    },
  });
};

export const useSignUp = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: (data: SignUpPayload) => signUp(data),
    onSuccess: (data) => setUser(data.user),
  });
};

export const useLogout = () => {
  const clearUser = useAuthStore((state) => state.clearUser);

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearUser();
    },
  });
};
