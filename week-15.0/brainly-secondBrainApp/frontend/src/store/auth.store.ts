import { create } from "zustand";

interface User {
  id: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isHydrated: boolean;

  login: (user: User, token: string) => void;
  logout: () => void;
  hydrate: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isHydrated: false,

  login: (user, token) => {
    localStorage.setItem("auth", JSON.stringify({ user, token }));

    set({
      user,
      token,
      isAuthenticated: true,
      isHydrated: true
    });
  },

  logout: () => {
    localStorage.removeItem("auth");

    set({
      user: null,
      token: null,
      isAuthenticated: false,
      isHydrated: true
    });
  },

  hydrate: () => {
    const data = localStorage.getItem("auth");

    if (data) {
      const parsed = JSON.parse(data);
      set({
        user: parsed.user,
        token: parsed.token,
        isAuthenticated: true,
        isHydrated: true
      });
    } else {
      set({ isHydrated: true });
    }
  }
}));
