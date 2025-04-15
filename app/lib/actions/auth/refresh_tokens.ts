'use server'

import {cookies} from "next/headers";
import {setTokens} from "@/app/lib/actions/auth/tokens";

export async function refreshTokens() {
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
