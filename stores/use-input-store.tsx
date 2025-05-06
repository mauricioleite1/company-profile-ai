import { create } from 'zustand';

interface InputStore {
  domain: string;
  setDomain: (domain: string) => void;
}

const useInputStore = create<InputStore>((set) => ({
  domain: '',
  setDomain: (domain: string) => set(() => ({ domain })),
}));

export default useInputStore;
