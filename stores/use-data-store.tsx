import { ICompany } from '@/types';
import { create } from 'zustand';

type State = {
  data: ICompany[];
  setData: (companies: ICompany[]) => void;
  addCompany: (company: ICompany) => void;
};

const useDataStore = create<State>((set) => ({
  data: [],
  setData: (companies) => set({ data: companies }),
  addCompany: (company) => set((state) => ({ data: [...state.data, company] })),
}));

export default useDataStore;
