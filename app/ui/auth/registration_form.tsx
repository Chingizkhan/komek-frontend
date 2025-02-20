'use client'

import {useRouter} from "next/navigation";
import {loginHandler, registerHandler} from "@/app/lib/actions";
import {LINK_LOGIN} from "@/app/consts/links";
import Form from "@/app/ui/auth/form";
import Link from "next/link";
import React, {useState, useTransition} from "react";

export default function RegistrationForm() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        startTransition(async () => {
            const result = await registerHandler(new FormData(e.target as HTMLFormElement));

            if (result.success) {
                router.push("/");
            } else {
                console.log("result.error:", result.error)
                setError(result.error.message || "Ошибка регистрации");
            }
        });
    };

    console.log('isPending:', isPending)

    return (
        <Form
            loading={isPending}
            error={error}
            title="Регистрация"
            btnText="Зарегестрироваться"
            action={handleSubmit}
            addition={
                <p className="mb-4 text-sm">
                    Уже есть аккаунт? <Link className="text-blue-500" href={LINK_LOGIN}>Войти</Link>
                </p>
            }
        />
    );
};