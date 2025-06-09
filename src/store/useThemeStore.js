import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  darkMode: false, // valor inicial
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));