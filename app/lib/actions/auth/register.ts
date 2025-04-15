'use server'

import {z} from "zod";
import {normalizePhoneNumber} from "@/app/utils/phone";

const registerSchema = z.object({
    phone: z.string(),
    password: z.string()
})

// const Register = registerSchema.omit({ phone: true, password: true });
const RegisterHandler = registerSchema.omit({  });

export async function registerHandler(formData: FormData) {
    try {
        const { phone, password } = RegisterHandler.parse({
            phone: formData.get('phone'),
            password: formData.get('password')
        })
        const response = await fetch('http://localhost:8887/user/register', {
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

        return {
            data,
            success: true
        }

    } catch (e) {
        return { error: e }
    }
}