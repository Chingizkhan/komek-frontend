'use client'
import {LINK_REGISTRATION} from "@/app/consts/links";
import Form from "@/app/ui/auth/form";
import Link from "next/link";
import React, {useState, useTransition} from "react";
import {useRouter} from "next/navigation";
import {loginHandler} from "@/app/lib/actions/auth/login";
import {useAuthStore} from "@/app/store/auth";


export default function LoginForm() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const [error, setError] = useState("");
    const setUser = useAuthStore((state) => state.login);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        startTransition(async () => {
            const result = await loginHandler(new FormData(e.target as HTMLFormElement));

            if (result.success) {
                setUser(result.data.user)
                router.back()
            } else {
                setError(result.error.message || "Ошибка входа");
            }
        });
    };

    return (
        <div>
            <Form
                loading={isPending}
                error={error}
                title="Вход"
                btnText="Войти"
                action={handleSubmit}
                addition={
                    <p className="mb-4 text-sm">
                        Еще нет аккуанта? <Link className="text-blue-500" href={LINK_REGISTRATION}>Регистрация</Link>
                    </p>
                }
            />
        </div>
    );
};