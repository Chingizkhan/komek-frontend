'use server'

import {normalizePhoneNumber} from "@/app/utils/phone";
import {cookies} from "next/headers";
import {z} from "zod";
import {setTokens} from "@/app/lib/actions/auth/tokens";

const loginSchema = z.object({
    phone: z.string(),
    password: z.string()
})

// const Register = registerSchema.omit({ phone: true, password: true });
const LoginHandler = loginSchema.omit({  });

export async function loginHandler(formData: FormData) {
    try {
        const { phone, password } = LoginHandler.parse({
            phone: formData.get('phone'),
            password: formData.get('password')
        })
        // await new Promise((resolve) => setTimeout(resolve, 1500))
        const response = await fetch('http://localhost:8887/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: normalizePhoneNumber(phone),
                password,
            })
        })
        const data = await response.json()

        if (!response.ok) {
            return { error: new Error(data.error) }
        }

        const cookie = await cookies()

        setTokens(cookie, data)

        return { data, success: true }

    } catch (e) {
        console.log('err:', e)
        return { error: e }
    }

    // redirect('/')
}