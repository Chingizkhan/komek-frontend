'use server'

import { z } from 'zod';
import {normalizePhoneNumber} from "@/app/utils/phone";
import {cookies} from "next/headers";

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

const loginSchema = z.object({
    phone: z.string(),
    password: z.string()
})

// const Register = registerSchema.omit({ phone: true, password: true });
const LoginHandler = loginSchema.omit({  });

async function fetchAuth(props: {
    url: string,
    method: string,
    notUseCache: boolean,
    body: any,
    headers: any,
}) {
    let { response , error} = await makeAuthRequest(props)
    if (error) {
        return { error: error }
    }
    if (response.status === 401) {
        await refreshTokens()
        response = await makeAuthRequest(props)
    }
    const data = await response.json()

    if (!response.ok) {
        return { error: new Error(data.error), ok: false }
    }

    return {
        data,
        ok: response.ok
    }
}

async function makeAuthRequest({ url, method, notUseCache, body, headers }:{
    url: string,
    method: string,
    notUseCache: boolean,
    body: any,
    headers: any,
}) {
    const cookie = await cookies()
    const accessToken = cookie.get("Access-Token")
    const refreshToken = cookie.get("Refresh-Token")

    console.log('accessToken:', accessToken)
    console.log('refreshToken:', refreshToken)

    if (!accessToken?.value) {
        return { error: 'access_token_is_empty' }
    }

    console.log('accessToken:', accessToken)
    console.log('refreshToken:', refreshToken)

    const req = {
        method: method,
        headers: {
            ...headers,
            'Authorization': 'Bearer ' +accessToken?.value,
            'Refresh-Token': refreshToken?.value,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body,
    }

    if (notUseCache) {
        req.cache = 'no-store'
    }

    const response = await fetch(url, req)
    return { response }
}

async function refreshTokens() {
    const cookie = await cookies()
    const refreshToken = cookie.get("Refresh-Token")

    const response = await fetch('http://localhost:8887/user/refresh-token', {
        method: 'POST',
        body: JSON.stringify({refresh_token: refreshToken?.value})
    })

    const tokens = await response.json()

    setTokens(cookie, tokens)

    console.log('tokens:', tokens)
}

export async function listClients() {
    try {
        const response = await fetch('http://localhost:8887/client/list',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })
        const data = await response.json()
        if (!response.ok) {
            return { error: new Error(data.error) }
        }

        return { data, success: true }
    } catch (e) {
        return { error: e }
    }
}

export async function getClient(clientID: string) {
    try {
        const response = await fetch(`http://localhost:8887/client/${clientID}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })
        const data = await response.json()
        console.log('data:', data)
        if (!response.ok) {
            return { error: new Error(data.error) }
        }

        return { data, success: true }
    } catch (e) {
        return { error: e }
    }
}

export async function removeHandler() {
    const { data, ok } = await fetchAuth({
        url: 'http://localhost:8887/user/delete',
        method: 'DELETE'
    })
    console.log('data:', data)
    console.log('ok:', ok)
}

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

function setTokens(cookie, data: {access_token: string, refresh_token: string}) {
    cookie.set("Access-Token", data.access_token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60*60
    })
    cookie.set("Refresh-Token", data.refresh_token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60*60*24
    })
}

export async function getUser() {
    try {
        const { data, ok, error } = await fetchAuth({
            url: 'http://localhost:8887/user',
            method: 'GET',
            notUseCache: true
        })
        if (!ok) {
            return error
        }
        return { data }
    } catch (e) {
        return { error: e }
    }
}