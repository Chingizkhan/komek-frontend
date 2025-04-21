'use server'

import {normalizePhoneNumber} from "@/app/utils/phone";
import {cookies} from "next/headers";
import {z} from "zod";
import {setTokens} from "@/app/lib/actions/auth/tokens";
import {AUTH_URL, HTTP_POST} from "@/app/lib/actions/const/constants";
import {createHeaders} from "@/app/lib/actions/util";

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
        const response = await fetch(AUTH_URL+'/login', {
            method: HTTP_POST,
            headers: createHeaders(),
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
}