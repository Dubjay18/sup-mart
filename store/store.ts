import { create } from 'zustand';

export interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

export const useStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

export interface themeState {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useThemeStore = create<themeState>((set) => ({
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
}));
