import { useStore } from "../store";

export const useBalance = () => {
    return useStore((state) => state.balance);
};