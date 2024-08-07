import { create } from 'zustand';

interface CurrentCardState {
  CurrentCard: ICard | null;
  setOpenCurrentCard: (card: ICard) => void;
  setCloseCurrentCard: () => void;
}

const useCurrentCardStore = create<CurrentCardState>((set) => ({
  CurrentCard: null,
  setOpenCurrentCard: (card) => set({ CurrentCard: card }),
  setCloseCurrentCard: () => set({ CurrentCard: null }),
}));

export default useCurrentCardStore;
