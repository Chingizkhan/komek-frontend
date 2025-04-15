"use client";

import React, { useEffect, useState } from "react";
import {useAuthStore} from "@/app/store/auth";
import {getUser} from "@/app/lib/actions/user/get";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const setUser = useAuthStore((state) => state.login);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            const { data, error } = await getUser();
            if (error) {
                setLoading(false);
                return
            }
            if (data) setUser(data);
            setLoading(false);
        }
        fetchUser();
    }, [setUser]);

    if (loading) return <p>Загрузка...</p>;

    return <>{children}</>;
}