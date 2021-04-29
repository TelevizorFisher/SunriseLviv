import create from "zustand";

export const useStore = create((set, get) => ({
  // Modal management

  modalOpen: null,

  ModalChange: (modalOpen) => {
    set((state) => ({
      modalOpen: !modalOpen,
    }));
  },
}));
