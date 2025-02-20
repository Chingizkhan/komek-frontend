// 'use client'

// import {useRouter} from "next/navigation";
import {registerHandler} from "@/app/lib/actions";
import {LINK_LOGIN} from "@/app/consts/links";
import Form from "@/app/ui/auth/form";
import Link from "next/link";

export default function RegistrationForm() {
    // const router = useRouter()
    //
    // const registerFunc = async (d) => {
    //     await registerHandler(d)
    //     router.push(LINK_LOGIN)
    // }

    return (
        <Form
            title="Регистрация"
            btnText="Зарегестрироваться"
            action={registerHandler}
            addition={
                <p className="mb-4 text-sm">
                    Уже есть аккаунт? <Link className="text-blue-500" href={LINK_LOGIN}>Войти</Link>
                </p>
            }
        />
    );
};