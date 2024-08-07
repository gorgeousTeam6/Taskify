import { create } from 'zustand';

interface EditModalState {
  EditModalId: number | null;
  setOpenEditModal: (id: number) => void;
  setCloseEditModal: () => void;
}

const useTodoEditModalStore = create<EditModalState>((set) => ({
  EditModalId: null,
  setOpenEditModal: (id) => set({ EditModalId: id }),
  setCloseEditModal: () => set({ EditModalId: null }),
}));


export default useTodoEditModalStore;