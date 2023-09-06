import { create } from "zustand";

interface WizardModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useWizardModal = create<WizardModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useWizardModal;
