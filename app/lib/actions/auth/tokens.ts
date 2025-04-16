import {ACCESS_TOKEN, REFRESH_TOKEN} from "@/app/lib/actions/const/constants";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export function setTokens(cookie: ReadonlyRequestCookies, data: {access_token: string, refresh_token: string}) {
    cookie.set(ACCESS_TOKEN, data.access_token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60*60
    })
    cookie.set(REFRESH_TOKEN, data.refresh_token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60*60*24
    })
}
