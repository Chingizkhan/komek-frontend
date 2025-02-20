'use server'

import { z } from 'zod';
import {normalizePhoneNumber} from "@/app/utils/phone";
import {redirect} from "next/navigation";
import {LINK_LOGIN} from "@/app/consts/links";

const registerSchema = z.object({
    phone: z.string(),
    password: z.string()
})

// const Register = registerSchema.omit({ phone: true, password: true });
const RegisterHandler = registerSchema.omit({  });

export async function registerHandler(formData: FormData) {
    throw new Error('Failed to register')
    try {
        const { phone, password } = RegisterHandler.parse({
            phone: formData.get('phone'),
            password: formData.get('password')
        })
        await new Promise((resolve) => setTimeout(resolve, 1500))
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
            return new Error("ERRR")
        }

        console.log(data)

    } catch (e) {
        console.log('err:', e)
        return
    }

    redirect(LINK_LOGIN)
}