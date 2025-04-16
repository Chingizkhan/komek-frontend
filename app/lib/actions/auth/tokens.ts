import {ACCESS_TOKEN, REFRESH_TOKEN} from "@/app/lib/actions/const/constants";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export function setTokens(
    cookie: ReadonlyRequestCookies,
    data: {
        access_token: string,
        refresh_token: string,
        access_token_expires_at: string,
        refresh_token_expires_at: string
    }
) {
    cookie.set(ACCESS_TOKEN, data.access_token, {
        httpOnly: true,
        sameSite: 'strict',
        expires: new Date(data.access_token_expires_at)
    })
    cookie.set(REFRESH_TOKEN, data.refresh_token, {
        httpOnly: true,
        sameSite: 'strict',
        expires: new Date(data.refresh_token_expires_at)
    })
}
