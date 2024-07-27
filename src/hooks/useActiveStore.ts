import { create } from 'zustand'

interface ActiveStore{
  isActive: boolean;
  setIsActiveTrue(): void;
  setIsActiveFalse(): void;
  type: "hero" | "about" | null;
}

export const useActive = create<ActiveStore>((set) => ({
  type: null,
  isActive: false,
  setIsActiveTrue: () => {
    set({isActive: true})
  },
  setIsActiveFalse: () => {
    set({isActive: false})
  }
}))