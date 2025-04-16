'use server'

import {cookies} from "next/headers";
import {setTokens} from "@/app/lib/actions/auth/tokens";
import {AUTH_URL, HTTP_POST} from "@/app/lib/actions/const/constants";

export async function refreshTokens() {
    const cookie = await cookies()
    const refreshToken = cookie.get("Refresh-Token")

    const response = await fetch(AUTH_URL+'/refresh-token', {
        method: HTTP_POST,
        body: JSON.stringify({refresh_token: refreshToken?.value})
    })

    const tokens = await response.json()

    setTokens(cookie, tokens)

    console.log('tokens:', tokens)
}
