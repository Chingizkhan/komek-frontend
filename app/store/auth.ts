// app/store/auth.ts
import { create } from "zustand";
import {User} from "@/app/domain/domain";

// Интерфейс для типов состояния
interface AuthState {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

// Создаём Zustand Store
export const useAuthStore = create<AuthState>((set) => ({
    user: null, // По умолчанию пользователь не авторизован
    login: (user: User) => set({ user: user }),
    logout: () => set({ user: null }),
}))

export const useUser = () => {
    return useAuthStore((state) => state.user)
}