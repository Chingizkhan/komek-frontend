'use server'

import {cookies} from "next/headers";

export async function fetchAuth(props: {
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

    if (!accessToken?.value) {
        return { error: 'access_token_is_empty' }
    }

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


