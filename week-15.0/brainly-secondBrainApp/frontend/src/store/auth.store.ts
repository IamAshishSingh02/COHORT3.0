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

  // ✅ Called after successful login/signup
  login: (user, token) => {
    localStorage.setItem(
      "auth",
      JSON.stringify({ user, token })
    );

    set({
      user,
      token,
      isAuthenticated: true,
      isHydrated: true
    });
  },

  // ✅ Clears everything safely
  logout: () => {
    localStorage.removeItem("auth");

    set({
      user: null,
      token: null,
      isAuthenticated: false,
      isHydrated: true
    });
  },

  // ✅ Runs once on app load (VERY IMPORTANT)
  hydrate: () => {
    try {
      const stored = localStorage.getItem("auth");

      if (!stored) {
        set({ isHydrated: true });
        return;
      }

      const { user, token } = JSON.parse(stored);

      if (!token) {
        set({ isHydrated: true });
        return;
      }

      set({
        user,
        token,
        isAuthenticated: true,
        isHydrated: true
      });
    } catch {
      // corrupted storage fallback
      localStorage.removeItem("auth");
      set({ isHydrated: true });
    }
  }
}));
