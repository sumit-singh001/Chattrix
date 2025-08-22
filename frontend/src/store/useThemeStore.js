import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Chattrix-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("Chattrix-theme", theme);
    set({ theme });
  },
}));