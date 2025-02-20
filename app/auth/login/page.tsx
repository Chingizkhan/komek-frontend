import Form from "@/app/ui/auth/form";
import Link from "next/link";
import {LINK_LOGIN, LINK_REGISTRATION} from "@/app/consts/links";

export default function Page() {
    return (
        <Form
            title="Вход"
            btnText="Войти"
            addition={
                <p className="mb-4 text-sm">
                    Еще нет аккуанта? <Link className="text-blue-500" href={LINK_REGISTRATION}>Регистрация</Link>
                </p>
            }
        />
    )
}

