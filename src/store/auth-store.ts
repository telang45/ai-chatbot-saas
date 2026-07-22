import { create } from "zustand";

interface AuthStore {
  user: { name: string; email: string; avatar: string } | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: { name: "Alex Morgan", email: "alex@nebula.ai", avatar: "AM" },
  isAuthenticated: true,
  login: (email) => set({ user: { name: email.split("@")[0], email, avatar: email[0].toUpperCase() }, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
