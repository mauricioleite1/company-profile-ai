import { create } from 'zustand';
import { ICompany } from '@/types/company';

interface DataStore {
  data: ICompany[];
  setData: (data: ICompany[]) => void;
}

const useDataStore = create<DataStore>((set) => ({
  data: [],
  setData: (data) => set(() => ({ data })),
}));

export default useDataStore;
