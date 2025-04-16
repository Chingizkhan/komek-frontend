'use server'

import {fetchAuth} from "@/app/lib/actions/auth/auth";
import {HTTP_GET, USER_URL} from "@/app/lib/actions/const/constants";

export async function getUser() {
    try {
        const { data, ok, error } = await fetchAuth({
            url: USER_URL,
            method: HTTP_GET,
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