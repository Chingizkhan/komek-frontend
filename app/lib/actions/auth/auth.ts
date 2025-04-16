'use server'

import {cookies} from "next/headers";
import {refreshTokens} from "@/app/lib/actions/auth/refresh_tokens";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "@/app/lib/actions/const/constants";
import {createHeaders} from "@/app/lib/actions/util";

export interface IAuthData {
    url: string,
    method: string,
    notUseCache?: boolean,
    body?: object,
    headers?: object,
}

export async function fetchAuth(props: IAuthData) {
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

async function makeAuthRequest({ url, method, notUseCache, body, headers }:IAuthData) {
    const cookie = await cookies()
    const accessToken = cookie.get(ACCESS_TOKEN)
    const refreshToken = cookie.get(REFRESH_TOKEN)

    if (!accessToken?.value) {
        return { error: 'access_token_is_empty' }
    }

    const req = {
        method: method,
        headers: createHeaders({
            'Authorization': 'Bearer ' +accessToken?.value,
            'Refresh-Token': refreshToken?.value,
            ...headers
        }),
        body: JSON.stringify(body),
    }

    if (notUseCache) {
        req.cache = 'no-store'
    }

    const response = await fetch(url, req)
    return { response }
}


