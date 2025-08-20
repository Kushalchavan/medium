import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
} | null;

type AuthState = {
  user: User;
  token: string | null;
  setUser: (user: User, token: string) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  setUser: (user, token) => set({ user, token }),
  clearUser: () => set({ user: null, token: null }),
}));
