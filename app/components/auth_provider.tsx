"use client";

import React, { useEffect, useState } from "react";
import {useAuthStore} from "@/app/store/auth";
import {getUser} from "@/app/lib/actions/user/get";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/app/ui/logo/logo";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const setUser = useAuthStore((state) => state.login);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            const { data, error } = await getUser();
            await new Promise((resolve) => setTimeout(() => {
                resolve(1)
            }, 800))
            if (error) {
                setLoading(false);
                return
            }
            if (data) setUser(data);
            setLoading(false);
        }
        fetchUser();
    }, [setUser]);

    return (
        <>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="fixed inset-0 z-50 bg-purple-600 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-white text-4xl font-semibold tracking-wide flex items-center flex-col"
                        >
                            <Logo width={150} />
                            {/*komek*/}

                            {/* Спиннер */}
                            <div className="w-40 h-40 border-4 border-white border-t-transparent rounded-full animate-spin fixed" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!loading && children}
        </>
    );
}
