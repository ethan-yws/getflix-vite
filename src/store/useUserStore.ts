import { create } from 'zustand';

interface User {
  user_id: string;
  username: string;
}

interface UserStore {
  user?: User | null;
  setUser: (user?: User | null) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: undefined }),
}));

export default useUserStore;
