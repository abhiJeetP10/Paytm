import { create } from "zustand";

type StoreState = {
    balance: number;
    setBalance: (balance: number) => void;
};

export const useStore = create<StoreState>((set) => ({
    balance: 0,
    setBalance: (balance: number) => set({ balance }),
}));