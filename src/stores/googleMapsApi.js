import { create } from 'zustand';

const googleMapStore = create((set) => ({
  // states
  loaded: false,
  updateLoading: (status) => set(() => ({ loaded: status })),
}));

export default googleMapStore;
