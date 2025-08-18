import { create } from "zustand";

type ThemeState = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const themeStore = create<ThemeState>((set) => ({
  theme: localStorage.getItem("theme") || "light",
  setTheme: (theme: string) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));
